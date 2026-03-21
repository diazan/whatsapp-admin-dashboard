export default function DentiModernaPage() {
  const whatsappLink =
    "https://wa.me/573162115687?text=Hola%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20en%20DentiModerna"
;

  const services = [
    {
      icon: "🦷",
      title: "Ortodoncia",
      description:
        "Brackets tradicionales, brackets estéticos y alineadores invisibles. Corrección de mordida y alineación dental con tecnología de punta.",
      price: "Desde \$8,500 MXN",
    },
    {
      icon: "🔩",
      title: "Implantes Dentales",
      description:
        "Implantes de titanio de alta calidad con garantía. Recupera tu sonrisa completa con una solución permanente y natural.",
      price: "Desde \$18,000 MXN",
    },
    {
      icon: "✨",
      title: "Blanqueamiento",
      description:
        "Blanqueamiento profesional en consultorio en solo 1 hora. Resultados visibles desde la primera sesión. Hasta 8 tonos más blanco.",
      price: "Desde \$2,500 MXN",
    },
    {
      icon: "🩺",
      title: "Limpieza Dental",
      description:
        "Profilaxis dental profesional con ultrasonido. Eliminación de sarro, placa y manchas. Recomendada cada 6 meses.",
      price: "Desde \$800 MXN",
    },
    {
      icon: "👶",
      title: "Odontopediatría",
      description:
        "Atención dental especializada para niños en un ambiente amigable y sin miedo. Selladores, flúor y educación preventiva.",
      price: "Desde \$500 MXN",
    },
    {
      icon: "💎",
      title: "Carillas de Porcelana",
      description:
        "Transforma tu sonrisa con carillas ultra-delgadas. Corrección estética de color, forma y tamaño dental. Resultados inmediatos.",
      price: "Desde \$4,500 MXN c/u",
    },
  ];

  const testimonials = [
    {
      name: "María G.",
      rating: 5,
      text: "Excelente atención desde el primer momento. El Dr. me explicó todo el proceso de mis brackets con mucha paciencia. ¡Ya llevo 8 meses y los resultados son increíbles!",
      service: "Ortodoncia",
    },
    {
      name: "Carlos R.",
      rating: 5,
      text: "Me hice el implante dental y quedé muy satisfecho. El procedimiento fue sin dolor y la recuperación fue rápida. Ahora no puedo distinguirlo de mi diente natural.",
      service: "Implante Dental",
    },
    {
      name: "Ana L.",
      rating: 5,
      text: "Vine por el blanqueamiento y quedé enamorada de la clínica. El ambiente es muy moderno y limpio. Agendar por WhatsApp fue súper fácil y rápido.",
      service: "Blanqueamiento",
    },
    {
      name: "Roberto M.",
      rating: 5,
      text: "Llevé a mis dos hijos y la experiencia fue perfecta. Los niños salieron contentos y sin miedo al dentista. ¡Por fin encontré su dentista de confianza!",
      service: "Odontopediatría",
    },
  ];

  const faqs = [
    {
      q: "¿Cómo puedo agendar mi cita?",
      a: "Puedes agendar tu cita directamente por WhatsApp en el número +52 998 123 4567. Nuestro asistente virtual está disponible las 24 horas para ayudarte a elegir el servicio y el horario que mejor te convenga.",
    },
    {
      q: "¿Aceptan seguro médico?",
      a: "Trabajamos con los principales seguros médicos y también ofrecemos planes de pago sin intereses. Contáctanos para verificar la cobertura de tu seguro específico.",
    },
    {
      q: "¿Cuánto tiempo dura una consulta de valoración?",
      a: "La consulta inicial de valoración dura aproximadamente 45 minutos. Incluye exploración completa, radiografías digitales y plan de tratamiento personalizado.",
    },
    {
      q: "¿El tratamiento de ortodoncia duele?",
      a: "Es normal sentir algo de molestia los primeros días después de colocar los brackets o hacer ajustes. Sin embargo, con las técnicas modernas que usamos, el proceso es mucho más cómodo que antes.",
    },
    {
      q: "¿Qué medidas de higiene tienen?",
      a: "Contamos con esterilización de instrumental en autoclave, uso de materiales desechables, filtros HEPA en todas las salas y protocolos estrictos de bioseguridad para garantizar tu salud.",
    },
  ];

  return (
    <>
      <style>{`
        * { box-sizing: border-box; }
        
        /* ── VARIABLES ── */
        :root {
          --primary: #0ea5e9;
          --primary-dark: #0284c7;
          --primary-light: #e0f2fe;
          --accent: #10b981;
          --dark: #0f172a;
          --gray: #64748b;
          --light-gray: #f1f5f9;
          --white: #ffffff;
          --shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
          --shadow-lg: 0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04);
        }

        /* ── NAVBAR ── */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.95);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(14,165,233,0.1);
          padding: 0 24px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 100%;
        }
        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .navbar-logo-icon {
          width: 40px;
          height: 40px;
          background: linear-gradient(135deg, var(--primary), var(--primary-dark));
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
        }
        .navbar-logo-text {
          font-size: 20px;
          font-weight: 800;
          color: var(--dark);
          letter-spacing: -0.5px;
        }
        .navbar-logo-text span {
          color: var(--primary);
        }
        .navbar-links {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .navbar-links a {
          color: var(--gray);
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: color 0.2s;
        }
        .navbar-links a:hover { color: var(--primary); }
        .navbar-cta {
          background: var(--primary);
          color: white !important;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600 !important;
          font-size: 14px !important;
          transition: background 0.2s !important;
        }
        .navbar-cta:hover { background: var(--primary-dark) !important; color: white !important; }

        /* ── HERO ── */
        .hero {
          min-height: 100vh;
          background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 40%, #f0fdf4 100%);
          display: flex;
          align-items: center;
          padding: 100px 24px 60px;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%);
          border-radius: 50%;
        }
        .hero-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
          width: 100%;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: var(--primary-light);
          color: var(--primary-dark);
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 20px;
        }
        .hero-badge::before { content: '⭐'; }
        .hero h1 {
          font-size: clamp(32px, 4vw, 52px);
          font-weight: 800;
          line-height: 1.1;
          color: var(--dark);
          margin: 0 0 20px;
          letter-spacing: -1px;
        }
        .hero h1 span { color: var(--primary); }
        .hero-sub {
          font-size: 18px;
          color: var(--gray);
          line-height: 1.6;
          margin: 0 0 36px;
        }
        .hero-btns {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }
        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #25D366;
          color: white;
          padding: 16px 28px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 15px rgba(37,211,102,0.3);
        }
        .btn-primary:hover {
          background: #20bd5a;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37,211,102,0.4);
        }
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: white;
          color: var(--primary);
          padding: 16px 28px;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: none;
          border: 2px solid var(--primary);
          transition: all 0.2s;
        }
        .btn-secondary:hover {
          background: var(--primary-light);
          transform: translateY(-2px);
        }
        .hero-stats {
          display: flex;
          gap: 32px;
          margin-top: 44px;
          padding-top: 32px;
          border-top: 1px solid rgba(14,165,233,0.15);
        }
        .hero-stat strong {
          display: block;
          font-size: 28px;
          font-weight: 800;
          color: var(--dark);
          letter-spacing: -0.5px;
        }
        .hero-stat span {
          font-size: 13px;
          color: var(--gray);
          font-weight: 500;
        }
        
        /* Hero Visual */
        .hero-visual {
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }
        .hero-card-main {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: var(--shadow-lg);
          width: 100%;
          max-width: 380px;
          position: relative;
          z-index: 1;
        }
        .hero-card-avatar {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, var(--primary), #38bdf8);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 16px;
        }
        .hero-card-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--dark);
          margin: 0 0 4px;
        }
        .hero-card-sub {
          font-size: 13px;
          color: var(--gray);
          margin: 0 0 20px;
        }
        .hero-card-msgs {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .msg-bubble {
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 13px;
          line-height: 1.5;
          max-width: 85%;
        }
        .msg-in {
          background: #f1f5f9;
          color: var(--dark);
          border-bottom-left-radius: 4px;
          align-self: flex-start;
        }
        .msg-out {
          background: var(--primary);
          color: white;
          border-bottom-right-radius: 4px;
          align-self: flex-end;
        }
        .msg-bot {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
          border-bottom-left-radius: 4px;
          align-self: flex-start;
        }
        .hero-card-floating {
          position: absolute;
          background: white;
          border-radius: 16px;
          padding: 12px 16px;
          box-shadow: var(--shadow-lg);
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .floating-1 {
          top: -20px;
          right: -30px;
          font-size: 13px;
          font-weight: 600;
          color: var(--accent);
        }
        .floating-2 {
          bottom: -20px;
          left: -30px;
          font-size: 13px;
          font-weight: 600;
          color: var(--primary);
        }

        /* ── SECTIONS ── */
        .section {
          padding: 80px 24px;
        }
        .section-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .section-label {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--primary);
          margin-bottom: 12px;
        }
        .section-title {
          font-size: clamp(26px, 3vw, 40px);
          font-weight: 800;
          color: var(--dark);
          margin: 0 0 16px;
          letter-spacing: -0.5px;
          line-height: 1.2;
        }
        .section-desc {
          font-size: 17px;
          color: var(--gray);
          line-height: 1.6;
          max-width: 540px;
          margin: 0 0 48px;
        }
        .section-bg-gray { background: var(--light-gray); }
        .section-bg-dark {
          background: var(--dark);
          color: white;
        }
        .section-bg-dark .section-title { color: white; }
        .section-bg-dark .section-desc { color: #94a3b8; }
        
        /* ── SERVICES ── */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .service-card {
          background: white;
          border-radius: 20px;
          padding: 28px;
          border: 1px solid rgba(14,165,233,0.1);
          transition: all 0.3s;
          cursor: default;
        }
        .service-card:hover {
          border-color: var(--primary);
          box-shadow: var(--shadow-lg);
          transform: translateY(-4px);
        }
        .service-icon {
          width: 52px;
          height: 52px;
          background: var(--primary-light);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 16px;
        }
        .service-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--dark);
          margin: 0 0 10px;
        }
        .service-desc {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.6;
          margin: 0 0 16px;
        }
        .service-price {
          font-size: 14px;
          font-weight: 700;
          color: var(--primary);
        }

        /* ── TESTIMONIALS ── */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .testimonial-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 28px;
          transition: all 0.3s;
        }
        .testimonial-card:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(14,165,233,0.4);
        }
        .testimonial-stars {
          color: #fbbf24;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .testimonial-text {
          font-size: 15px;
          color: #cbd5e1;
          line-height: 1.7;
          margin: 0 0 16px;
          font-style: italic;
        }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .testimonial-avatar {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), #38bdf8);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          color: white;
          font-size: 14px;
          flex-shrink: 0;
        }
        .testimonial-name {
          font-size: 14px;
          font-weight: 700;
          color: white;
        }
        .testimonial-service {
          font-size: 12px;
          color: var(--primary);
        }

        /* ── WHY US ── */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
          align-items: center;
        }
        .why-list {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }
        .why-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .why-item-icon {
          width: 48px;
          height: 48px;
          background: var(--primary-light);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 22px;
          flex-shrink: 0;
        }
        .why-item-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--dark);
          margin: 0 0 4px;
        }
        .why-item-desc {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.6;
          margin: 0;
        }
        .why-visual {
          background: linear-gradient(135deg, var(--primary-light), #f0fdf4);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
        }
        .why-visual-number {
          font-size: 64px;
          font-weight: 800;
          color: var(--primary);
          line-height: 1;
          letter-spacing: -2px;
        }
        .why-visual-label {
          font-size: 16px;
          color: var(--gray);
          font-weight: 500;
        }
        .why-visual-divider {
          width: 40px;
          height: 3px;
          background: var(--primary);
          margin: 16px auto;
          border-radius: 2px;
        }

        /* ── FAQ ── */
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 720px;
        }
        .faq-item {
          background: white;
          border-radius: 16px;
          border: 1px solid rgba(14,165,233,0.1);
          overflow: hidden;
        }
        .faq-q {
          font-size: 15px;
          font-weight: 700;
          color: var(--dark);
          padding: 20px 24px;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .faq-q::before {
          content: '?';
          width: 28px;
          height: 28px;
          background: var(--primary-light);
          color: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
          font-weight: 800;
          flex-shrink: 0;
        }
        .faq-a {
          font-size: 14px;
          color: var(--gray);
          line-height: 1.7;
          padding: 0 24px 20px 64px;
        }

        /* ── CTA SECTION ── */
        .cta-section {
          background: linear-gradient(135deg, var(--primary-dark), var(--primary));
          padding: 80px 24px;
          text-align: center;
        }
        .cta-title {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: white;
          margin: 0 0 16px;
          letter-spacing: -1px;
        }
        .cta-sub {
          font-size: 18px;
          color: rgba(255,255,255,0.8);
          margin: 0 0 36px;
        }
        .btn-cta-whatsapp {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: #25D366;
          color: white;
          padding: 18px 36px;
          border-radius: 14px;
          font-size: 18px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.2s;
          box-shadow: 0 4px 20px rgba(0,0,0,0.2);
        }
        .btn-cta-whatsapp:hover {
          background: #20bd5a;
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }
        .cta-note {
          margin-top: 20px;
          font-size: 14px;
          color: rgba(255,255,255,0.6);
        }

        /* ── FOOTER ── */
        .footer {
          background: #020617;
          color: #94a3b8;
          padding: 60px 24px 32px;
        }
        .footer-inner {
          max-width: 1100px;
          margin: 0 auto;
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 48px;
          margin-bottom: 48px;
        }
        .footer-brand-name {
          font-size: 20px;
          font-weight: 800;
          color: white;
          margin-bottom: 12px;
        }
        .footer-brand-name span { color: var(--primary); }
        .footer-brand-desc {
          font-size: 14px;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        .footer-social {
          display: flex;
          gap: 12px;
        }
        .footer-social-link {
          width: 38px;
          height: 38px;
          background: rgba(255,255,255,0.05);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          text-decoration: none;
          transition: background 0.2s;
          border: 1px solid rgba(255,255,255,0.08);
        }
        .footer-social-link:hover { background: var(--primary); }
        .footer-col-title {
          font-size: 13px;
          font-weight: 700;
          color: white;
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 16px;
        }
        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-links a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }
        .footer-links a:hover { color: var(--primary); }
        .footer-contact-item {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          font-size: 14px;
          margin-bottom: 10px;
        }
        .footer-divider {
          border: none;
          border-top: 1px solid rgba(255,255,255,0.06);
          margin: 0 0 24px;
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
        }
        .footer-legal {
          display: flex;
          gap: 24px;
        }
        .footer-legal a {
          color: #94a3b8;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: var(--primary); }

        /* ── WHATSAPP FLOAT ── */
        .whatsapp-float {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          width: 60px;
          height: 60px;
          background: #25D366;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(37,211,102,0.5);
          transition: all 0.2s;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
          box-shadow: 0 8px 30px rgba(37,211,102,0.6);
        }
        .whatsapp-float-pulse {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #25D366;
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.7; }
          100% { transform: scale(1.6); opacity: 0; }
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 768px) {
          .hero-inner { grid-template-columns: 1fr; gap: 40px; }
          .hero-visual { display: none; }
          .services-grid { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
          .footer-grid { grid-template-columns: 1fr 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; gap: 16px; text-align: center; }
          .footer-legal { flex-wrap: wrap; justify-content: center; }
          .navbar-links { display: none; }
          .hero-stats { gap: 20px; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
          .section { padding: 60px 20px; }
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <nav className="navbar">
        <a href="/" className="navbar-logo">
          <div className="navbar-logo-icon">🦷</div>
          <div className="navbar-logo-text">
            Denti<span>Moderna</span>
          </div>
        </a>
        <ul className="navbar-links">
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#testimonios">Testimonios</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="navbar-cta">
              📅 Agendar cita
            </a>
          </li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="hero-badge">Más de 2,000 pacientes satisfechos</div>
            <h1>
              Tu sonrisa perfecta a un <span>mensaje de distancia</span>
            </h1>
            <p className="hero-sub">
              Clínica dental moderna en Cali, Valle del Cauca. Agenda tu cita en segundos por
              WhatsApp, sin llamadas, sin esperas. Atención personalizada con
              tecnología de vanguardia.
            </p>
            <div className="hero-btns">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>💬</span> Agendar por WhatsApp
              </a>
              <a href="#servicios" className="btn-secondary">
                Ver servicios →
              </a>
            </div>
            <div className="hero-stats">
              <div className="hero-stat">
                <strong>2,000+</strong>
                <span>Pacientes atendidos</span>
              </div>
              <div className="hero-stat">
                <strong>8+</strong>
                <span>Años de experiencia</span>
              </div>
              <div className="hero-stat">
                <strong>98%</strong>
                <span>Satisfacción</span>
              </div>
            </div>
          </div>

          {/* Visual: chat simulado */}
          <div className="hero-visual">
            <div className="hero-card-main">
              <div className="hero-card-avatar">🦷</div>
              <div className="hero-card-title">DentiModerna</div>
              <div className="hero-card-sub">Asistente WhatsApp · En línea ahora</div>
              <div className="hero-card-msgs">
                <div className="msg-in">Hola, quiero agendar una limpieza dental 😊</div>
                <div className="msg-bot">
                  ¡Hola! 👋 Con gusto te ayudo. Tenemos disponibilidad esta semana. ¿Qué día te viene mejor?
                </div>
                <div className="msg-out">El miércoles por la tarde</div>
                <div className="msg-bot">
                  ✅ Perfecto. Tengo 4:00 PM o 5:30 PM el miércoles. ¿Cuál prefieres?
                </div>
                <div className="msg-out">A las 4pm está bien</div>
                <div className="msg-bot">
                  🗓️ ¡Listo! Tu cita queda confirmada para el miércoles a las 4:00 PM. ¡Te esperamos!
                </div>
              </div>
            </div>
            <div className="hero-card-floating floating-1">
              ✅ Cita confirmada al instante
            </div>
            <div className="hero-card-floating floating-2">
              🔔 Recordatorio automático
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ── */}
      <section className="section section-bg-gray" id="servicios">
        <div className="section-inner">
          <div className="section-label">Nuestros Servicios</div>
          <h2 className="section-title">Todo lo que tu sonrisa necesita</h2>
          <p className="section-desc">
            Ofrecemos tratamientos dentales completos con tecnología de última
            generación y los más altos estándares de calidad.
          </p>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <p className="service-desc">{s.description}</p>
                <div className="service-price">{s.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── POR QUÉ ELEGIRNOS ── */}
      <section className="section" id="nosotros">
        <div className="section-inner">
          <div className="why-grid">
            <div>
              <div className="section-label">¿Por qué DentiModerna?</div>
              <h2 className="section-title">Tecnología y calidez en cada visita</h2>
              <p className="section-desc">
                Combinamos equipos de vanguardia con un equipo humano comprometido
                con tu bienestar.
              </p>
              <div className="why-list">
                {[
                  {
                    icon: "🤖",
                    title: "Agenda por WhatsApp 24/7",
                    desc: "Nuestro asistente virtual te ayuda a agendar, reagendar o cancelar citas en cualquier momento, sin esperar en línea.",
                  },
                  {
                    icon: "🏥",
                    title: "Equipo de última generación",
                    desc: "Radiografías digitales, láser dental, scanner intraoral 3D y sillones ergonómicos para tu máxima comodidad.",
                  },
                  {
                    icon: "🛡️",
                    title: "Protocolos de esterilización",
                    desc: "Autoclave clase B certificado, materiales desechables y filtros HEPA en todas las salas de tratamiento.",
                  },
                  {
                    icon: "💳",
                    title: "Planes de financiamiento",
                    desc: "Pago a 3, 6 y 12 meses sin intereses. Aceptamos todas las tarjetas y transferencias bancarias.",
                  },
                ].map((item) => (
                  <div className="why-item" key={item.title}>
                    <div className="why-item-icon">{item.icon}</div>
                    <div>
                      <div className="why-item-title">{item.title}</div>
                      <p className="why-item-desc">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="why-visual">
              <div style={{ marginBottom: 32 }}>
                <div className="why-visual-number">2,000+</div>
                <div className="why-visual-divider" />
                <div className="why-visual-label">Pacientes que confían en nosotros</div>
              </div>
              <div style={{ marginBottom: 32 }}>
                <div className="why-visual-number">8</div>
                <div className="why-visual-divider" />
                <div className="why-visual-label">Años transformando sonrisas</div>
              </div>
              <div>
                <div className="why-visual-number">98%</div>
                <div className="why-visual-divider" />
                <div className="why-visual-label">Índice de satisfacción</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIOS ── */}
      <section className="section section-bg-dark" id="testimonios">
        <div className="section-inner">
          <div className="section-label">Testimonios</div>
          <h2 className="section-title">Lo que dicen nuestros pacientes</h2>
          <p className="section-desc">
            Más de 2,000 familias en Cancún ya confían en DentiModerna para
            cuidar su salud dental.
          </p>
          <div className="testimonials-grid">
            {testimonials.map((t) => (
              <div className="testimonial-card" key={t.name}>
                <div className="testimonial-stars">
                  {"⭐".repeat(t.rating)}
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-service">{t.service}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="section section-bg-gray" id="faq">
        <div className="section-inner">
          <div className="section-label">Preguntas Frecuentes</div>
          <h2 className="section-title">¿Tienes dudas? Te respondemos</h2>
          <p className="section-desc">
            Si no encuentras tu respuesta aquí, escríbenos por WhatsApp y te
            atendemos de inmediato.
          </p>
          <div className="faq-list">
            {faqs.map((item) => (
              <div className="faq-item" key={item.q}>
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <div className="cta-section">
        <h2 className="cta-title">¿Listo para transformar tu sonrisa?</h2>
        <p className="cta-sub">
          Agenda tu valoración gratuita hoy. Sin compromisos, sin costos ocultos.
        </p>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-cta-whatsapp">
          <span>💬</span> Agendar cita gratis por WhatsApp
        </a>
        <p className="cta-note">
            📍 Calle 5 Norte # 8N-51, Consultorio 3, Cali, Valle del Cauca · ☎️ +57 316 211 5687
        </p>
      </div>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-grid">
            <div>
              <div className="footer-brand-name">Denti<span>Moderna</span></div>
              <p className="footer-brand-desc">
                Clínica dental profesional en Cancún, Quintana Roo. Tecnología
                de vanguardia al servicio de tu sonrisa. Agenda tu cita por
                WhatsApp en cualquier momento.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/dentimoderna" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">📘</a>
                <a href="https://www.instagram.com/dentimoderna" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">📸</a>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="WhatsApp">💬</a>
              </div>
            </div>
            <div>
              <div className="footer-col-title">Servicios</div>
              <ul className="footer-links">
                {["Ortodoncia", "Implantes Dentales", "Blanqueamiento", "Limpieza Dental", "Odontopediatría", "Carillas"].map((s) => (
                  <li key={s}><a href="#servicios">{s}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Clínica</div>
              <ul className="footer-links">
                {[
                  ["#nosotros", "Nosotros"],
                  ["#testimonios", "Testimonios"],
                  ["#faq", "Preguntas frecuentes"],
                  [whatsappLink, "Agendar cita"],
                  ["/dentimoderna/privacidad", "Aviso de privacidad"],
                  ["/dentimoderna/terminos", "Términos de uso"],
                ].map(([href, label]) => (
                  <li key={label}><a href={href}>{label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <div className="footer-col-title">Contacto</div>
              <div className="footer-contact-item">
                <span>📍</span>
                <span>Calle 5 Norte # 8N-51, Consultorio 3, Cali, Valle del Cauca, 760001</span>
              </div>
              <div className="footer-contact-item">
                <span>📞</span>
                <span>+57 316 211 5687</span>
              </div>
              <div className="footer-contact-item">
                <span>✉️</span>
                <span>hola@dentimoderna.lat</span>
              </div>
              <div className="footer-contact-item">
                <span>🕐</span>
                <span>Lun–Vie: 9am–7pm<br />Sáb: 9am–2pm</span>
              </div>
            </div>
          </div>
          <hr className="footer-divider" />
          <div className="footer-bottom">
            <span>© 2026 DentiModerna. Todos los derechos reservados.</span>
            <div className="footer-legal">
              <a href="/dentimoderna/privacidad">Aviso de privacidad</a>
              <a href="/dentimoderna/terminos">Términos de uso</a>
              <a href="#faq">Ayuda</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── WHATSAPP FLOTANTE ── */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        <div className="whatsapp-float-pulse" />
        💬
      </a>
    </>
  );
}