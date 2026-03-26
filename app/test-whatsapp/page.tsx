// page.tsx
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
      window.FB?.init({
        appId: "1957597294843345", // tu App ID
        cookie: true,
        xfbml: false,
        version: "v19.0",
      });
      window.fbReady = true;
      console.log("FB SDK listo");
    };

    document.body.appendChild(script);
  }, []);

  const iniciarSignup = () => {
    if (!window.fbReady) {
      console.warn("FB SDK no está listo");
      return;
    }

    // Abre popup Embedded Signup
    window.FB?.login(
      () => {
        console.log("Popup Embedded Signup abierto. Esperando redirect al backend...");
      },
      {
        config_id: "1562865618139738", // tu config_id
        response_type: "code",
        override_default_response_type: true,
        redirect_uri: "https://www.kerbo.co/api/oauth/callback", // apuntando al backend
      }
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={iniciarSignup}>Conectar WhatsApp</button>
    </div>
  );
}