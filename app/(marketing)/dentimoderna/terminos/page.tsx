const legalStyles = `
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
`;

export default function TerminosPage() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: legalStyles }} />
      <div className="legal-wrapper">
        <a href="/dentimoderna" className="legal-back">
          ← Volver a DentiModerna
        </a>
        <h1 className="legal-title">Términos y Condiciones de Uso</h1>
        <p className="legal-date">Última actualización: 1 de marzo de 2026</p>

        <h2 className="legal-section-title">1. Aceptación de términos</h2>
        <p className="legal-text">
          Al acceder y usar el sitio web dentimoderna.lat y/o nuestros servicios
          de comunicación vía WhatsApp, usted acepta estos Términos y Condiciones
          en su totalidad. Si no está de acuerdo, le pedimos no utilizar nuestros
          servicios.
        </p>

        <h2 className="legal-section-title">2. Descripción del servicio</h2>
        <p className="legal-text">
          DentiModerna ofrece servicios de atención dental profesional, incluyendo
          consultas, tratamientos y procedimientos dentales en nuestras
          instalaciones en Cali, Valle del Cauca, Colombia. Adicionalmente, ofrecemos un
          sistema de agendamiento de citas vía WhatsApp disponible las 24 horas.
        </p>

        <h2 className="legal-section-title">3. Uso del sitio web</h2>
        <p className="legal-text">
          El usuario se compromete a utilizar este sitio web y nuestros canales de
          comunicación de forma lícita y respetando estos términos. Queda
          prohibido:
        </p>
        <ul className="legal-list">
          <li>Usar el sistema de agendamiento con fines fraudulentos</li>
          <li>Enviar mensajes spam o abusivos por WhatsApp</li>
          <li>Intentar acceder a información de otros pacientes</li>
          <li>Reproducir o distribuir el contenido del sitio sin autorización</li>
        </ul>

        <h2 className="legal-section-title">4. Agendamiento de citas</h2>
        <p className="legal-text">
          El sistema de agendamiento por WhatsApp es una herramienta de
          conveniencia. DentiModerna se reserva el derecho de confirmar, modificar
          o cancelar citas según disponibilidad. Las citas no confirmadas por un
          profesional de la clínica no garantizan disponibilidad.
        </p>

        <h2 className="legal-section-title">5. Política de cancelaciones</h2>
        <p className="legal-text">
          Solicitamos que las cancelaciones se realicen con al menos 24 horas de
          anticipación. Cancelaciones repetidas sin aviso previo pueden resultar
          en restricciones para agendar nuevas citas.
        </p>

        <h2 className="legal-section-title">6. Responsabilidad médica</h2>
        <p className="legal-text">
          La información contenida en este sitio web es de carácter informativo y
          no sustituye la consulta médica profesional. El diagnóstico y
          tratamiento dental solo puede realizarse en persona por nuestros
          profesionales certificados.
        </p>

        <h2 className="legal-section-title">7. Propiedad intelectual</h2>
        <p className="legal-text">
          Todos los contenidos de este sitio web, incluyendo textos, imágenes,
          logotipos y diseño, son propiedad de DentiModerna y están protegidos por
          las leyes de propiedad intelectual aplicables en México.
        </p>

        <h2 className="legal-section-title">8. Comunicaciones por WhatsApp</h2>
        <p className="legal-text">
          Al proporcionar su número de WhatsApp para agendar una cita, usted
          consiente recibir mensajes relacionados con su atención dental
          (confirmaciones, recordatorios y seguimiento). Puede solicitar darse de
          baja en cualquier momento enviando &quot;STOP&quot; por WhatsApp.
        </p>

        <h2 className="legal-section-title">9. Modificaciones</h2>
        <p className="legal-text">
          DentiModerna se reserva el derecho de modificar estos términos en
          cualquier momento. Las modificaciones entrarán en vigor desde su
          publicación en este sitio. El uso continuado del sitio implica la
          aceptación de los nuevos términos.
        </p>

        <h2 className="legal-section-title">10. Ley aplicable</h2>
        <p className="legal-text">
          Estos términos se rigen por las leyes de la República de Colombia..
          Para cualquier controversia, las partes se someten a la jurisdicción de
          los tribunales competentes de Cali, Valle del Cauca.
        </p>

        <h2 className="legal-section-title">11. Contacto</h2>
        <p className="legal-text">
          Para cualquier duda sobre estos términos, contáctenos en:
          <br />📧 legal@dentimoderna.lat
          <br />📞 +57 316 211 5687
          <br />📍 Calle 5 Norte # 8N-51, Consultorio 3, Cali, Valle del Cauca

        </p>
      </div>
    </>
  );
}