import Link from "next/link";

export default function PrivacidadDentiBotPage() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1a1a2e",
        margin: 0,
        padding: 0,
        backgroundColor: "#ffffff",
      }}
    >
      {/* HEADER */}
      <header
        style={{
          background: "linear-gradient(135deg, #0f4c75 0%, #3282b8 100%)",
          color: "#ffffff",
          padding: "20px 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link
          href="/dentibot"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            textDecoration: "none",
            color: "#ffffff",
          }}
        >
          <span style={{ fontSize: "28px" }}>🦷</span>
          <h1 style={{ margin: 0, fontSize: "24px", fontWeight: 700 }}>
            DentiBot
          </h1>
        </Link>
      </header>

      {/* CONTENIDO */}
      <main
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "40px 20px",
          lineHeight: "1.8",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            color: "#0f4c75",
            marginBottom: "24px",
          }}
        >
          Política de Privacidad
        </h2>

        <p style={{ color: "#555", marginBottom: "8px" }}>
          <strong>Última actualización:</strong>{" "}
          {new Date().toLocaleDateString("es-CO", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>

        <p>
          En <strong>DentiBot Clínica Odontológica</strong>, valoramos y
          protegemos la privacidad de nuestros pacientes y usuarios. Esta
          política describe cómo recopilamos, usamos y protegemos su información
          personal.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          1. Información que Recopilamos
        </h3>
        <ul style={{ color: "#444" }}>
          <li>Nombre completo</li>
          <li>Número de teléfono y WhatsApp</li>
          <li>Información de salud dental proporcionada voluntariamente</li>
          <li>Datos de citas y consultas</li>
          <li>Mensajes enviados a través de WhatsApp</li>
        </ul>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          2. Uso de la Información
        </h3>
        <p>Utilizamos su información exclusivamente para:</p>
        <ul style={{ color: "#444" }}>
          <li>Gestionar y confirmar citas odontológicas</li>
          <li>Enviar recordatorios de citas programadas</li>
          <li>Brindar atención personalizada</li>
          <li>Comunicaciones relacionadas con su tratamiento</li>
          <li>Mejorar nuestros servicios</li>
        </ul>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          3. WhatsApp y Mensajería
        </h3>
        <p>
          Utilizamos la plataforma WhatsApp Business API para comunicarnos con
          nuestros pacientes. Los mensajes pueden incluir confirmaciones de
          citas, recordatorios y respuestas a consultas. Al contactarnos por
          WhatsApp, usted acepta recibir comunicaciones por este medio.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          4. Protección de Datos
        </h3>
        <p>
          Implementamos medidas de seguridad técnicas y organizativas para
          proteger su información personal contra acceso no autorizado,
          alteración, divulgación o destrucción.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          5. Compartición de Datos
        </h3>
        <p>
          No vendemos, alquilamos ni compartimos su información personal con
          terceros, excepto cuando sea necesario para la prestación del servicio
          o cuando la ley lo requiera.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          6. Derechos del Usuario
        </h3>
        <p>Usted tiene derecho a:</p>
        <ul style={{ color: "#444" }}>
          <li>Acceder a su información personal</li>
          <li>Solicitar corrección de datos inexactos</li>
          <li>Solicitar eliminación de sus datos</li>
          <li>Revocar el consentimiento para comunicaciones</li>
        </ul>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>7. Contacto</h3>
        <p>
          Para ejercer sus derechos o resolver dudas sobre privacidad,
          contáctenos:
        </p>
        <ul style={{ color: "#444", listStyle: "none", paddingLeft: 0 }}>
          <li>📍 Cra 121A # 35b-87, Cali, Colombia</li>
          <li>📞 +57 313 764 6472</li>
          <li>
            💬{" "}
            <a
              href="https://wa.me/573137646472"
              style={{ color: "#25d366" }}
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </main>

      {/* FOOTER */}
      <footer
        style={{
          background: "#1b262c",
          color: "#bbe1fa",
          padding: "20px",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        <p>
          © {new Date().getFullYear()} DentiBot Clínica Odontológica |{" "}
          <Link
            href="/dentibot"
            style={{ color: "#bbe1fa", textDecoration: "none" }}
          >
            Volver al inicio
          </Link>
        </p>
      </footer>
    </div>
  );
}