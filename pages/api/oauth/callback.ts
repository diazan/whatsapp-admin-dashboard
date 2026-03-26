import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const APP_ID = process.env.META_APP_ID!;
const APP_SECRET = process.env.META_APP_SECRET!;
const REDIRECT_URI = "https://www.kerbo.co/api/oauth/callback";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const isGet = req.method === "GET";

  // ✅ GET = redirect de Meta, POST = popup de FB.login
  const code = isGet
    ? (req.query.code as string)
    : (req.body?.code as string);

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  console.log("✅ Code recibido via", req.method);

  try {
    // 1️⃣ Code → Short token
    // ⚠️ Solo incluir redirect_uri si vino por GET (redirect)
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

    // 3️⃣ Obtener WABA
    const wabaResponse = await axios.get(
      "https://graph.facebook.com/v19.0/me/whatsapp_business_accounts",
      { params: { access_token } }
    );

    const waba = wabaResponse.data.data?.[0];
    if (!waba) {
      return res.status(400).json({
        error: "No WABA found",
        raw: wabaResponse.data,
      });
    }

    // 4️⃣ Obtener Phone Number
    const phoneResponse = await axios.get(
      `https://graph.facebook.com/v19.0/${waba.id}/phone_numbers`,
      { params: { access_token } }
    );

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
      waba_id: waba.id,
      waba_name: waba.name,
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