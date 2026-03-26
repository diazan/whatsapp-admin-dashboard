import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const APP_ID = process.env.META_APP_ID!;
const APP_SECRET = process.env.META_APP_SECRET!;
const REDIRECT_URI = "https://www.kerbo.co/api/oauth/callback";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = req.query.code as string || req.body?.code as string;
  const method = req.method;
  const fullUrl = `https://www.kerbo.co${req.url}`;

  console.log("🔍 Method:", method);
  console.log("🔍 Full URL:", fullUrl);
  console.log("🔍 Code:", code ? code.slice(0, 30) + "..." : "NO CODE");
  console.log("🔍 Query params:", JSON.stringify(req.query));

  return res.status(200).send(`
    <html>
      <body style="font-family: monospace; padding: 40px; background: #1a1a2e; color: #00ff88;">
        <h2>🔍 Debug OAuth Callback</h2>
        <p><strong>Method:</strong> ${method}</p>
        <p><strong>Full URL:</strong> ${fullUrl}</p>
        <p><strong>Code:</strong> ${code ? code.slice(0, 30) + "..." : "NO CODE"}</p>
        <p><strong>All query params:</strong></p>
        <pre>${JSON.stringify(req.query, null, 2)}</pre>
      </body>
    </html>
  `);
}