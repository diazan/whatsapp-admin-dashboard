import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

// Tus datos de la app de Meta (mantener en .env en producción)
const APP_ID = process.env.META_APP_ID!;
const APP_SECRET = process.env.META_APP_SECRET!;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { code } = req.body;
  if (!code) return res.status(400).json({ error: "No code provided" });

  try {
    // 1️⃣ Intercambio del code por access_token temporal
    const tokenResponse = await axios.get(
      `https://graph.facebook.com/v19.0/oauth/access_token`,
      {
        params: {
          client_id: APP_ID,
          redirect_uri: "https://semibourgeois-giuseppe-obsolescently.ngrok-free.dev/api/oauth/callback", // tu URL de callback
          client_secret: APP_SECRET,
          code,
        },
      }
    );

    const shortLivedToken = tokenResponse.data.access_token;
    console.log("Access token temporal recibido:", shortLivedToken);

    // 2️⃣ Convertir a token de larga duración
    const longTokenResponse = await axios.get(
      `https://graph.facebook.com/v19.0/oauth/access_token`,
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
    console.log("Access token de larga duración:", access_token);

    // 3️⃣ Obtener WABA asociado a la cuenta
    const wabaResponse = await axios.get(
      `https://graph.facebook.com/v19.0/me/accounts`,
      { params: { access_token } }
    );

    const waba = wabaResponse.data.data[0];
    console.log("WABA obtenido:", waba);

    // 4️⃣ Obtener phone_number_id del WABA
    const phoneResponse = await axios.get(
      `https://graph.facebook.com/v19.0/${waba.id}/phone_numbers`,
      { params: { access_token } }
    );

    const phone_number = phoneResponse.data.data[0];
    console.log("Número de teléfono WABA:", phone_number);

    // 5️⃣ Respuesta al frontend (o guardarlo en DB)
    res.status(200).json({
      message: "Flujo completo OK",
      access_token,
      waba_id: waba.id,
      phone_number_id: phone_number.id,
    });

} catch (err: any) {
  console.error("Error completo:", err);                  // imprime el error completo
  console.error("Err.response:", err.response?.data);     // imprime lo que Meta devuelve
  res.status(500).json({
    error: "Error en flujo OAuth",
    details: err.response?.data || err.message,
  });
}
}