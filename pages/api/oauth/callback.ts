import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const APP_ID = process.env.META_APP_ID!;
const APP_SECRET = process.env.META_APP_SECRET!;
const REDIRECT_URI = "https://www.kerbo.co/api/oauth/callback";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.method === "GET" ? req.query.code : req.body?.code) as string;

  if (!code) return res.status(400).json({ error: "No code provided" });

  try {
    console.log("✅ Code recibido");

    // 1️⃣ Code → Short token
    const shortResp = await axios.get("https://graph.facebook.com/v19.0/oauth/access_token", {
      params: {
        client_id: APP_ID,
        client_secret: APP_SECRET,
        code,
        redirect_uri: REDIRECT_URI,
      },
    });
    const shortToken = shortResp.data.access_token;
    console.log("✅ Short token OK");

    // 2️⃣ Short → Long token
    const longResp = await axios.get("https://graph.facebook.com/v19.0/oauth/access_token", {
      params: {
        grant_type: "fb_exchange_token",
        client_id: APP_ID,
        client_secret: APP_SECRET,
        fb_exchange_token: shortToken,
      },
    });
    const accessToken = longResp.data.access_token;
    console.log("✅ Long token OK");

    // 3️⃣ Obtener WABA del token (Embedded Signup crea la cuenta)
    const debugResp = await axios.get("https://graph.facebook.com/v19.0/debug_token", {
      params: {
        input_token: accessToken,
        access_token: `${APP_ID}|${APP_SECRET}`,
      },
    });

    console.log("✅ Debug token:", JSON.stringify(debugResp.data, null, 2));

    const granularScopes = debugResp.data.data?.granular_scopes || [];
    const wabaScope = granularScopes.find((s: any) => s.scope === "whatsapp_business_management");

    const wabaId = wabaScope?.target_ids?.[0];
    if (!wabaId) {
      return res.status(400).json({
        error: "No WABA found. Asegúrate de crear la WABA en el popup Embedded Signup.",
        raw: debugResp.data,
      });
    }
    console.log("✅ WABA ID:", wabaId);

    // 4️⃣ Obtener Phone Number
    const phoneResp = await axios.get(`https://graph.facebook.com/v19.0/${wabaId}/phone_numbers`, {
      params: { access_token: accessToken },
    });

    const phone = phoneResp.data.data?.[0];
    if (!phone) {
      return res.status(400).json({
        error: "No phone found. Asegúrate de registrar un número en el popup Embedded Signup.",
        raw: phoneResp.data,
      });
    }

    // ✅ Resultado final
    const result = {
      message: "✅ Onboarding completado",
      access_token: accessToken,
      waba_id: wabaId,
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