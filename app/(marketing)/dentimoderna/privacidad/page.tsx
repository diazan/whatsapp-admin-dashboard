export default function PrivacidadPage() {
  return (
    <>
      <style>{`
        body { font-family: 'Inter', sans-serif; background: #f8fafc; }
        .legal-wrapper {
          max-width: 800px;
          margin: 0 auto;
          padding: 80px 24px;
        }
        .legal-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #0ea5e9;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          margin-bottom: 32px;
        }
        .legal-back:hover { text-decoration: underline; }
        .legal-title {
          font-size: 32px;
          font-weight: 800;
          color: #0f172a;
          margin: 0 0 8px;
        }
        .legal-date {
          font-size: 14px;
          color: #64748b;
          margin-bottom: 40px;
        }
        .legal-section-title {
          font-size: 18px;
          font-weight: 700;
          color: #0f172a;
          margin: 32px 0 12px;
        }
        .legal-text {
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          margin: 0 0 16px;
        }
        ul.legal-list {
          margin: 0 0 16px;
          padding-left: 24px;
        }
        ul.legal-list li {
          font-size: 15px;
          color: #475569;
          line-height: 1.8;
          margin-bottom: 8px;
        }
      `}</style>
      <div className="legal-wrapper">
        <a href="/dentimoderna" className="legal-back">← Volver a DentiModerna</a>
        <h1 className="legal-title">Aviso de Privacidad</h1>
        <p className="legal-date">Última actualización: 1 de marzo de 2026</p>

        <h2 className="legal-section-title">1. Responsable del tratamiento de datos</h2>
        <p className="legal-text">
          DentiModerna Clínica Dental, S.A. de C.V., con domicilio en Calle 5 Norte # 8N-51, Consultorio 3, Cali, Valle del Cauca, C.P. 760001, Colombia
        , es la responsable
          del uso y protección de sus datos personales.
        </p>
        <p className="legal-text">
          Correo de contacto para asuntos de privacidad: <strong>privacidad@dentimoderna.lat</strong>
        </p>

        <h2 className="legal-section-title">2. Datos personales que recabamos</h2>
        <p className="legal-text">Podemos recabar los siguientes datos personales:</p>
        <ul className="legal-list">
          <li>Nombre completo</li>
          <li>Número de teléfono (WhatsApp)</li>
          <li>Correo electrónico</li>
          <li>Fecha de nacimiento</li>
          <li>Información sobre su salud dental (para fines de atención médica)</li>
          <li>Historial de citas y tratamientos</li>
        </ul>

        <h2 className="legal-section-title">3. Finalidad del tratamiento</h2>
        <p className="legal-text">Sus datos personales son utilizados para:</p>
        <ul className="legal-list">
          <li>Agendar, confirmar y gestionar citas dentales</li>
          <li>Enviar recordatorios de citas por WhatsApp</li>
          <li>Brindar atención médica dental personalizada</li>
          <li>Elaborar expediente clínico conforme a la normativa vigente</li>
          <li>Cumplir con obligaciones legales y fiscales</li>
          <li>Enviar información sobre promociones y servicios (solo con consentimiento)</li>
        </ul>

        <h2 className="legal-section-title">4. Transferencia de datos</h2>
        <p className="legal-text">
          DentiModerna no vende, renta ni transfiere sus datos personales a terceros
          sin su consentimiento, salvo las excepciones previstas en la Ley Federal de
          Protección de Datos Personales en Posesión de los Particulares (LFPDPPP).
        </p>

        <h2 className="legal-section-title">5. Derechos ARCO</h2>
        <p className="legal-text">
          Usted tiene derecho a Acceder, Rectificar, Cancelar u Oponerse al tratamiento
          de sus datos personales (derechos ARCO). Para ejercerlos, envíe un correo a
          <strong> privacidad@dentimoderna.lat</strong> con su nombre completo y el
          derecho que desea ejercer.
        </p>

        <h2 className="legal-section-title">6. Uso de WhatsApp</h2>
        <p className="legal-text">
          Al contactarnos a través de WhatsApp, usted acepta que podemos comunicarnos
          con usted por este medio para la gestión de citas y atención al paciente.
          Nuestro sistema de mensajería está desarrollado sobre WhatsApp Business API,
          cumpliendo con las políticas de Meta Platforms, Inc.
        </p>

        <h2 className="legal-section-title">7. Cookies y tecnologías de rastreo</h2>
        <p className="legal-text">
          Nuestro sitio web utiliza cookies técnicas necesarias para su funcionamiento.
          No utilizamos cookies de rastreo publicitario sin su consentimiento previo.
        </p>

        <h2 className="legal-section-title">8. Cambios al aviso de privacidad</h2>
        <p className="legal-text">
          Nos reservamos el derecho de modificar este aviso en cualquier momento.
          Cualquier cambio será publicado en esta página con la fecha de actualización
          correspondiente.
        </p>

        <h2 className="legal-section-title">9. Contacto</h2>
        <p className="legal-text">
          Para cualquier duda sobre este aviso de privacidad, contáctenos en:<br />
          📧 privacidad@dentimoderna.lat<br />
          📞 +57 316 211 5687<br />
          📍 Calle 5 Norte # 8N-51, Consultorio 3, Cali, Valle del Cauca
        </p>
      </div>
    </>
  );
}