import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const APP_ID = process.env.META_APP_ID!;
const APP_SECRET = process.env.META_APP_SECRET!;
const REDIRECT_URI = "https://www.kerbo.co/api/oauth/callback";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const isGet = req.method === "GET";

  const code = isGet
    ? (req.query.code as string)
    : (req.body?.code as string);

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  console.log("✅ Code recibido via", req.method);

  try {
    // 1️⃣ Code → Short token
    const tokenParams: Record<string, string> = {
      client_id: APP_ID,
      client_secret: APP_SECRET,
      code,
    };

    if (isGet) {
      tokenParams.redirect_uri = REDIRECT_URI;
    }

    const tokenResponse = await axios.get(
      "https://graph.facebook.com/v19.0/oauth/access_token",
      { params: tokenParams }
    );

    const shortLivedToken = tokenResponse.data.access_token;
    console.log("✅ Short token OK");

    // 2️⃣ Short → Long token
    const longTokenResponse = await axios.get(
      "https://graph.facebook.com/v19.0/oauth/access_token",
      {
        params: {
          grant_type: "fb_exchange_token",
          client_id: APP_ID,
          client_secret: APP_SECRET,
          fb_exchange_token: shortLivedToken,
        },
      }
    );

    const access_token = longTokenResponse.data.access_token;
    console.log("✅ Long token OK");

    // 3️⃣ Obtener WABA via debug_token
    const debugResponse = await axios.get(
      "https://graph.facebook.com/v19.0/debug_token",
      {
        params: {
          input_token: access_token,
          access_token: `${APP_ID}|${APP_SECRET}`,
        },
      }
    );

    console.log("✅ Debug token:", JSON.stringify(debugResponse.data, null, 2));

    const granularScopes = debugResponse.data.data?.granular_scopes || [];
    const wabaScope = granularScopes.find(
      (s: any) => s.scope === "whatsapp_business_management"
    );

    const waba_id = wabaScope?.target_ids?.[0];
    if (!waba_id) {
      return res.status(400).json({
        error: "No WABA found in token scopes",
        raw: debugResponse.data,
      });
    }

    console.log("✅ WABA ID:", waba_id);

    // 4️⃣ Obtener Phone Number
    const phoneResponse = await axios.get(
      `https://graph.facebook.com/v19.0/${waba_id}/phone_numbers`,
      { params: { access_token } }
    );

    console.log("✅ Phones:", JSON.stringify(phoneResponse.data, null, 2));

    const phone = phoneResponse.data.data?.[0];
    if (!phone) {
      return res.status(400).json({
        error: "No phone found",
        raw: phoneResponse.data,
      });
    }

    // ✅ Resultado
    const result = {
      message: "✅ Onboarding completado",
      access_token,
      waba_id,
      phone_number_id: phone.id,
      display_phone_number: phone.display_phone_number,
    };

    console.log("✅ Result:", JSON.stringify(result, null, 2));

    return res.status(200).json(result);

  } catch (err: any) {
    console.error("❌ Error:", err.response?.data || err.message);
    return res.status(500).json({
      error: "Error en flujo OAuth",
      details: err.response?.data || err.message,
    });
  }
}