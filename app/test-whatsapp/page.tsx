"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    FB?: {
      init: (config: {
        appId: string;
        cookie: boolean;
        xfbml: boolean;
        version: string;
      }) => void;
      login: (
        callback: (response: FacebookLoginResponse) => void,
        options?: {
          config_id?: string;
          response_type?: string;
          override_default_response_type?: boolean;
        }
      ) => void;
    };
    fbReady?: boolean;
  }
}

interface FacebookLoginResponse {
  status: "connected" | "not_authorized" | "unknown";
  authResponse?: {
    code?: string;          // cuando response_type: "code"
    accessToken?: string;   // cuando response_type: "token"
    userID: string;
  };
}

export default function TestWhatsApp() {
  useEffect(() => {
    // Evita cargar el SDK dos veces en dev (StrictMode monta dos veces)
    if (document.getElementById("fb-sdk")) return;

    const script = document.createElement("script");
    script.id = "fb-sdk";
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      window.FB?.init({
        appId: "1957597294843345",
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });
      window.fbReady = true;
      console.log("FB SDK listo");
    };

    document.body.appendChild(script);
  }, []);

  const iniciarSignup = async () => {
    if (!window.fbReady || !window.FB) {
      console.warn("FB SDK no está listo");
      return;
    }

    window.FB.login(
      async (response: FacebookLoginResponse) => {
        console.log("Respuesta del popup:", response);

        // El usuario canceló o no autorizó
        if (response.status !== "connected" || !response.authResponse) {
          console.warn("El usuario no completó el signup:", response.status);
          return;
        }

        const code = response.authResponse.code;

        if (!code) {
          console.error("No llegó el code en authResponse:", response.authResponse);
          return;
        }

        console.log("Code recibido:", code);

        // Ahora sí enviamos el code al backend para exchangear
        try {
          const res = await fetch("/api/oauth/callback", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ code }),
          });

          const data = await res.json();
          console.log("Respuesta del backend:", data);

          if (!res.ok) {
            console.error("Error en el backend:", data);
            return;
          }

          console.log("✅ WABA vinculada correctamente:", data);
        } catch (err) {
          console.error("Error al llamar al backend:", err);
        }
      },
      {
        config_id: "1562865618139738",
        response_type: "code",
        override_default_response_type: true,
        // ⚠️ Sin redirect_uri — el SDK maneja el popup internamente
      }
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={iniciarSignup}>Conectar WhatsApp</button>
    </div>
  );
}