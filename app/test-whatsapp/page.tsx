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
      appId: "1957597294843345",
      cookie: true,
      xfbml: false,
      version: "v19.0",
    });

    // 👇 IMPORTANTE
    (window as any).fbReady = true;
    console.log("FB listo");
  };

  document.body.appendChild(script);
}, []);

const iniciarSignup = () => {
  console.log("click detectado");

  if (!(window as any).fbReady) {
    console.log("FB aún no está listo");
    return;
  }

  console.log("FB listo, ejecutando login");

  console.log("CONFIG_ID:", "1562865618139738");

  (window as any).FB.login(
    function (response: any) {
      console.log("RESPONSE:", response);
    },
    {
      config_id: "1562865618139738",
      response_type: "code",
      override_default_response_type: true,
    }
  );
};

  // 👇 AQUÍ VA EL RETURN
  return (
    <div style={{ padding: "20px" }}>
      <button onClick={iniciarSignup}>
        Conectar WhatsApp
      </button>
    </div>
  );
}
