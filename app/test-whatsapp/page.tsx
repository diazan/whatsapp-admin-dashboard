"use client";

import { useEffect } from "react";

export default function TestWhatsApp() {

  useEffect(() => {
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
        xfbml: false,
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

      <div
        onClick={iniciarSignup}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && iniciarSignup()}
        style={{
          display: "inline-block",
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#1877F2",
          color: "white",
          borderRadius: "6px",
          userSelect: "none",
        }}
      >
        Conectar WhatsApp
      </div>
    </div>
  );
}