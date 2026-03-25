"use client";

import { useEffect } from "react";

export default function TestWhatsApp() {

  useEffect(() => {
    // Cargar SDK
    const script = document.createElement("script");
    script.src = "https://connect.facebook.net/en_US/sdk.js";
    script.async = true;
    script.defer = true;
    script.crossOrigin = "anonymous";
    document.body.appendChild(script);

    (window as any).fbAsyncInit = function () {
      (window as any).FB.init({
        appId: "TU_APP_ID",
        cookie: true,
        xfbml: true,
        version: "v19.0",
      });
    };
  }, []);

  const iniciarSignup = () => {
    (window as any).FB.login(
      function (response: any) {
        console.log("RESPONSE:", response);
      },
      {
        config_id: "TU_CONFIG_ID",
        response_type: "code",
        override_default_response_type: true,
        extras: {
          setup: {},
        },
      }
    );
  };

 return (
  <div style={{ padding: "20px" }}>
    <h2>Conectar WhatsApp</h2>

    <button
      onClick={iniciarSignup}
      style={{
        padding: "10px 20px",
        fontSize: "16px",
        cursor: "pointer"
      }}
    >
      Conectar WhatsApp
    </button>
  </div>
);
}