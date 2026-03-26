import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const APP_ID = process.env.META_APP_ID!;
const APP_SECRET = process.env.META_APP_SECRET!;
const REDIRECT_URI = "https://www.kerbo.co/api/oauth/callback";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // ✅ Acepta GET (redirect de Meta) y POST (llamada manual)
  const code = req.method === "GET" 
    ? req.query.code as string 
    : req.body.code as string;

  if (!code) {
    return res.status(400).json({ error: "No code provided" });
  }

  console.log("✅ Code recibido:", code.slice(0, 20) + "...");

  try {
    // 1️⃣ Intercambio code → short lived token
    const tokenResponse = await axios.get(
      "https://graph.facebook.com/v19.0/oauth/access_token",
      {
        params: {
          client_id: APP_ID,
          client_secret: APP_SECRET,
          redirect_uri: REDIRECT_URI,
          code,
        },
      }
    );

    const shortLivedToken = tokenResponse.data.access_token;
    console.log("✅ Short token recibido:", shortLivedToken.slice(0, 20) + "...");

    // 2️⃣ Short token → Long lived token
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
    console.log("✅ Long token recibido:", access_token.slice(0, 20) + "...");

    // 3️⃣ Obtener WABA
    const wabaResponse = await axios.get(
      "https://graph.facebook.com/v19.0/me/whatsapp_business_accounts",
      {
        params: { access_token },
      }
    );

    console.log("✅ WABAs:", JSON.stringify(wabaResponse.data, null, 2));

    const waba = wabaResponse.data.data?.[0];
    if (!waba) {
      return res.status(400).json({
        error: "No se encontró WABA",
        raw: wabaResponse.data,
      });
    }

    // 4️⃣ Obtener Phone Number ID
    const phoneResponse = await axios.get(
      `https://graph.facebook.com/v19.0/${waba.id}/phone_numbers`,
      {
        params: { access_token },
      }
    );

    console.log("✅ Phones:", JSON.stringify(phoneResponse.data, null, 2));

    const phone = phoneResponse.data.data?.[0];
    if (!phone) {
      return res.status(400).json({
        error: "No se encontró número",
        raw: phoneResponse.data,
      });
    }

    // 5️⃣ Respuesta final
    const result = {
      message: "✅ Flujo completo OK",
      access_token,
      waba_id: waba.id,
      waba_name: waba.name,
      phone_number_id: phone.id,
      display_phone_number: phone.display_phone_number,
    };

    console.log("✅ Resultado final:", JSON.stringify(result, null, 2));

    // ✅ Si es GET (redirect), mostrar resultado en página
    if (req.method === "GET") {
      return res.status(200).send(`
        <html>
          <body style="font-family: monospace; padding: 40px; background: #1a1a2e; color: #00ff88;">
            <h2>✅ Onboarding completado</h2>
            <pre>${JSON.stringify(result, null, 2)}</pre>
            <p style="color: #ff6b6b; margin-top: 20px;">
              ⚠️ Guarda estos datos. No recargues esta página.
            </p>
          </body>
        </html>
      `);
    }

    return res.status(200).json(result);

  } catch (err: any) {
    console.error("❌ Error OAuth:", err.response?.data || err.message);
    
    const errorDetails = err.response?.data || err.message;

    if (req.method === "GET") {
      return res.status(500).send(`
        <html>
          <body style="font-family: monospace; padding: 40px; background: #1a1a2e; color: #ff6b6b;">
            <h2>❌ Error en Onboarding</h2>
            <pre>${JSON.stringify(errorDetails, null, 2)}</pre>
          </body>
        </html>
      `);
    }

    return res.status(500).json({
      error: "Error en flujo OAuth",
      details: errorDetails,
    });
  }
}