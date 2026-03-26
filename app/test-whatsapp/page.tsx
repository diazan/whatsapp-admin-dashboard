// page.tsx
"use client";

import { useEffect } from "react";

// -----------------------------
// Declaración global para TypeScript
// -----------------------------
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
        callback: (response: any) => void,
        options?: {
          config_id?: string;
          response_type?: string;
          override_default_response_type?: boolean;
          redirect_uri?: string;
        }
      ) => void;
    };
    fbReady?: boolean;
  }
}

// -----------------------------
// Componente principal
// -----------------------------
export default function TestWhatsApp() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;

    script.onload = () => {
      window.FB?.init({
        appId: "1957597294843345", // reemplaza con tu App ID
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });
      window.fbReady = true;
      console.log("FB SDK listo");
    };

    document.body.appendChild(script);
  }, []);

  // -----------------------------
  // Función para iniciar Embedded Signup
  // -----------------------------
  const iniciarSignup = () => {
    if (!window.fbReady) {
      console.warn("FB SDK no está listo todavía");
      return;
    }

    window.FB?.login(
      (response: any) => {
        // Envolvemos código async dentro de IIFE
        void (async () => {
          const code = response?.authResponse?.code as string | undefined;

          if (!code) {
            console.error("No se recibió code del popup:", response);
            return;
          }

          try {
            const res = await fetch("/api/oauth/callback", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ code }),
            });

            const data = await res.json();
            console.log("Respuesta backend:", data);
          } catch (err) {
            console.error("Error enviando code al backend:", err);
          }
        })();
      },
      {
        config_id: "1562865618139738", // tu config_id de Embedded Signup
        response_type: "code",
        override_default_response_type: true,
        redirect_uri: "https://www.kerbo.co/api/oauth/callback", // debe coincidir exactamente
      }
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={() => void iniciarSignup()}>Conectar WhatsApp</button>
    </div>
  );
}