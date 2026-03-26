"use client";

import { useEffect } from "react";

// global.d.ts
export {};

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
  void (async () => {
    if (!window.fbReady) return;

    window.FB?.login(
      async (response: any) => {
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
      },
      {
        config_id: "1562865618139738",
        response_type: "code",
        override_default_response_type: true,
        redirect_uri: "https://www.kerbo.co/api/oauth/callback",
      }
    );
  })();
};

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={iniciarSignup}>Conectar WhatsApp</button>
    </div>
  );
}