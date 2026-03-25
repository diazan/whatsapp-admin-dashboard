import Link from "next/link";

export default function DentiBotPage() {
  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#1a1a2e",
        margin: 0,
        padding: 0,
      }}
    >
      {/* ========== HEADER ========== */}
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
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "32px" }}>🦷</span>
          <h1 style={{ margin: 0, fontSize: "28px", fontWeight: 700 }}>
            DentiBot
          </h1>
        </div>
        <nav style={{ display: "flex", gap: "24px" }}>
          <a href="#servicios" style={{ color: "#bbe1fa", textDecoration: "none", fontWeight: 500 }}>
            Servicios
          </a>
          <a href="#nosotros" style={{ color: "#bbe1fa", textDecoration: "none", fontWeight: 500 }}>
            Nosotros
          </a>
          <a href="#contacto" style={{ color: "#bbe1fa", textDecoration: "none", fontWeight: 500 }}>
            Contacto
          </a>
        </nav>
      </header>

      {/* ========== HERO ========== */}
      <section
        style={{
          background: "linear-gradient(135deg, #0f4c75 0%, #1b262c 100%)",
          color: "#ffffff",
          textAlign: "center",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            fontWeight: 700,
            marginBottom: "16px",
          }}
        >
          Tu sonrisa, nuestra prioridad
        </h2>
        <p
          style={{
            fontSize: "18px",
            maxWidth: "600px",
            margin: "0 auto 32px",
            color: "#bbe1fa",
            lineHeight: "1.6",
          }}
        >
          En DentiBot combinamos tecnología avanzada con atención humana
          para brindarte la mejor experiencia odontológica en Cali.
        </p>
        <a
          href="https://wa.me/573137646472"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "#25d366",
            color: "#ffffff",
            padding: "14px 36px",
            borderRadius: "30px",
            textDecoration: "none",
            fontWeight: 600,
            fontSize: "16px",
          }}
        >
          💬 Agenda tu cita por WhatsApp
        </a>
      </section>

      {/* ========== SERVICIOS ========== */}
      <section
        id="servicios"
        style={{
          padding: "60px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "40px",
            color: "#0f4c75",
          }}
        >
          Nuestros Servicios
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              icon: "🦷",
              title: "Odontología General",
              desc: "Limpieza dental, revisiones periódicas, restauraciones y tratamiento de caries.",
            },
            {
              icon: "✨",
              title: "Estética Dental",
              desc: "Blanqueamiento, carillas, diseño de sonrisa y tratamientos cosméticos.",
            },
            {
              icon: "🔧",
              title: "Ortodoncia",
              desc: "Brackets convencionales, ortodoncia invisible y alineadores modernos.",
            },
            {
              icon: "🏥",
              title: "Cirugía Oral",
              desc: "Extracciones, implantes dentales y procedimientos quirúrgicos especializados.",
            },
            {
              icon: "👶",
              title: "Odontopediatría",
              desc: "Cuidado dental especializado para niños en un ambiente cálido y seguro.",
            },
            {
              icon: "🛡️",
              title: "Endodoncia",
              desc: "Tratamientos de conducto con tecnología avanzada y mínimo dolor.",
            },
          ].map((service, i) => (
            <div
              key={i}
              style={{
                background: "#f8f9fa",
                padding: "30px 20px",
                borderRadius: "12px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
              }}
            >
              <div style={{ fontSize: "40px", marginBottom: "12px" }}>
                {service.icon}
              </div>
              <h3
                style={{
                  fontSize: "18px",
                  marginBottom: "8px",
                  color: "#0f4c75",
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  color: "#555",
                  lineHeight: "1.5",
                }}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ========== NOSOTROS ========== */}
      <section
        id="nosotros"
        style={{
          background: "#e8f4f8",
          padding: "60px 20px",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "32px",
              marginBottom: "20px",
              color: "#0f4c75",
            }}
          >
            Sobre DentiBot
          </h2>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#333",
              marginBottom: "16px",
            }}
          >
            Somos una clínica odontológica ubicada en Cali, Colombia, comprometida
            con la salud bucal de nuestros pacientes. Contamos con un equipo de
            profesionales altamente calificados y tecnología de última generación.
          </p>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#333",
            }}
          >
            Nuestro compromiso es ofrecer tratamientos personalizados, atención
            humana y resultados de calidad. Cada paciente es único y merece una
            experiencia dental excepcional.
          </p>
        </div>
      </section>

      {/* ========== CONTACTO ========== */}
      <section
        id="contacto"
        style={{
          padding: "60px 20px",
          maxWidth: "700px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "32px",
            marginBottom: "30px",
            color: "#0f4c75",
          }}
        >
          Contáctanos
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            textAlign: "center",
          }}
        >
          <div>
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>📍</div>
            <h4 style={{ margin: "0 0 4px", color: "#0f4c75" }}>Dirección</h4>
            <p style={{ fontSize: "14px", color: "#555", lineHeight: "1.5" }}>
              Cra 121A # 35b-87
              <br />
              Cali, Colombia
            </p>
          </div>
          <div>
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>📞</div>
            <h4 style={{ margin: "0 0 4px", color: "#0f4c75" }}>Teléfono</h4>
            <p style={{ fontSize: "14px", color: "#555" }}>
              <a
                href="tel:+573137646472"
                style={{ color: "#3282b8", textDecoration: "none" }}
              >
                +57 313 764 6472
              </a>
            </p>
          </div>
          <div>
            <div style={{ fontSize: "28px", marginBottom: "8px" }}>💬</div>
            <h4 style={{ margin: "0 0 4px", color: "#0f4c75" }}>WhatsApp</h4>
            <p style={{ fontSize: "14px", color: "#555" }}>
              <a
                href="https://wa.me/573137646472"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#25d366", textDecoration: "none" }}
              >
                Escríbenos ahora
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* ========== HORARIO ========== */}
      <section
        style={{
          background: "#f8f9fa",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ color: "#0f4c75", marginBottom: "16px" }}>
          Horario de Atención
        </h3>
        <p style={{ fontSize: "15px", color: "#555", lineHeight: "1.8" }}>
          Lunes a Viernes: 8:00 AM - 6:00 PM
          <br />
          Sábados: 8:00 AM - 1:00 PM
          <br />
          Domingos: Cerrado
        </p>
      </section>

      {/* ========== FOOTER ========== */}
      <footer
        style={{
          background: "#1b262c",
          color: "#bbe1fa",
          padding: "30px 20px",
          textAlign: "center",
        }}
      >
        <p style={{ margin: "0 0 8px", fontSize: "14px" }}>
          © {new Date().getFullYear()} DentiBot Clínica Odontológica. Todos los
          derechos reservados.
        </p>
        <p style={{ margin: "0 0 8px", fontSize: "13px", color: "#7a8fa6" }}>
          Cra 121A # 35b-87, Cali, Colombia | Tel: +57 313 764 6472
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "12px",
          }}
        >
          <Link
            href="/dentibot/privacidad"
            style={{ color: "#bbe1fa", textDecoration: "none", fontSize: "13px" }}
          >
            Política de Privacidad
          </Link>
          <Link
            href="/dentibot/terminos"
            style={{ color: "#bbe1fa", textDecoration: "none", fontSize: "13px" }}
          >
            Términos y Condiciones
          </Link>
        </div>
      </footer>
    </div>
  );
}