import Link from "next/link";

export default function TerminosDentiBotPage() {
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
          Términos y Condiciones
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
          Al utilizar los servicios de <strong>DentiBot Clínica Odontológica</strong>,
          incluyendo nuestro servicio de atención por WhatsApp, usted acepta los
          siguientes términos y condiciones.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          1. Servicios Ofrecidos
        </h3>
        <p>
          DentiBot ofrece servicios de odontología general, estética dental,
          ortodoncia, cirugía oral, odontopediatría y endodoncia. Nuestro
          canal de WhatsApp facilita la gestión de citas, consultas y
          comunicación con pacientes.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          2. Uso del Servicio de WhatsApp
        </h3>
        <p>Nuestro servicio de WhatsApp está diseñado para:</p>
        <ul style={{ color: "#444" }}>
          <li>Agendar y confirmar citas</li>
          <li>Enviar recordatorios</li>
          <li>Responder consultas generales</li>
          <li>Proporcionar información sobre servicios</li>
        </ul>
        <p>
          Este canal no reemplaza una consulta médica presencial. No se
          realizan diagnósticos ni prescripciones a través de WhatsApp.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          3. Responsabilidad del Usuario
        </h3>
        <ul style={{ color: "#444" }}>
          <li>Proporcionar información veraz y actualizada</li>
          <li>Asistir a las citas programadas o cancelar con anticipación</li>
          <li>No usar el servicio de mensajería para fines inapropiados</li>
          <li>Mantener actualizado su número de contacto</li>
        </ul>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          4. Cancelación de Citas
        </h3>
        <p>
          Se solicita cancelar o reprogramar citas con al menos 24 horas de
          anticipación. Las inasistencias recurrentes podrán resultar en
          restricciones para futuras reservas.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          5. Privacidad
        </h3>
        <p>
          El manejo de su información personal se rige por nuestra{" "}
          <Link href="/dentibot/privacidad" style={{ color: "#3282b8" }}>
            Política de Privacidad
          </Link>
          .
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          6. Limitación de Responsabilidad
        </h3>
        <p>
          DentiBot no se hace responsable por interrupciones en el servicio de
          WhatsApp causadas por la plataforma Meta, problemas de conectividad
          del usuario u otras causas fuera de nuestro control.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>
          7. Modificaciones
        </h3>
        <p>
          Nos reservamos el derecho de modificar estos términos en cualquier
          momento. Los cambios se publicarán en esta página.
        </p>

        <h3 style={{ color: "#0f4c75", marginTop: "30px" }}>8. Contacto</h3>
        <p>Para consultas sobre estos términos:</p>
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