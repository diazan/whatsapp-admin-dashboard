"use client";

import { useEffect } from "react";

export default function TestWhatsApp() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      (window as any).FB.init({
        appId: "1957597294843345", // tu APP_ID
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });
      (window as any).fbReady = true;
      console.log("FB SDK listo");
    };

    document.body.appendChild(script);
  }, []);

  const iniciarSignup = () => {
    if (!(window as any).fbReady) return;

    (window as any).FB.login(
      async function (response: any) {
        if (response.authResponse && response.authResponse.code) {
          const code = response.authResponse.code;
          console.log("Code recibido:", code);

          // 🔹 Enviar inmediatamente al backend
          try {
            const res = await fetch(
              "https://www.kerbo.co/api/oauth/callback",
              {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ code }),
              }
            );
            const data = await res.json();
            console.log("Respuesta backend:", data);
          } catch (err) {
            console.error("Error enviando code al backend:", err);
          }
        } else {
          console.error("No se recibió code del popup:", response);
        }
      },
      {
        config_id: "1562865618139738",
        response_type: "code",
        override_default_response_type: true,
        redirect_uri: "https://www.kerbo.co/api/oauth/callback", // exacta y registrada en Meta
      }
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={iniciarSignup}>Conectar WhatsApp</button>
    </div>
  );
}