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

      (window as any).fbReady = true;
      console.log("FB listo");
    };

    document.body.appendChild(script);
  }, []);

  // 👇 Nueva función para enviar el code al backend
  const handleCodeReceived = async (authResponse: any) => {
    const code = authResponse.code;
    console.log("Código del popup:", code);

    try {
      const res = await fetch("/api/oauth/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();
      console.log("Respuesta del backend:", data);
    } catch (err) {
      console.error("Error enviando code al backend:", err);
    }
  };

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

        // 👈 Aquí llamamos a la función para enviar el code
        if (response.authResponse?.code) {
          handleCodeReceived(response.authResponse);
        }
      },
      {
        config_id: "1562865618139738",
        response_type: "code",
        override_default_response_type: true,
      }
    );
  };

  return (
    <div style={{ padding: "20px" }}>
      <button onClick={iniciarSignup}>
        Conectar WhatsApp
      </button>
    </div>
  );
}