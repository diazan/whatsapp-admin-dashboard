export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Política de Privacidad</h1>

        <p className="mb-6 text-gray-400">
          En Kerbo valoramos la privacidad de nuestros usuarios y clientes.
          Esta Política de Privacidad describe cómo recopilamos, utilizamos y
          protegemos la información.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Información que recopilamos
        </h2>
        <p className="text-gray-400 mb-6">
          Podemos recopilar información como nombre, número de teléfono,
          correo electrónico y datos relacionados con citas gestionadas a
          través de nuestros servicios.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Uso de la información
        </h2>
        <p className="text-gray-400 mb-6">
          Utilizamos la información para proporcionar y mejorar nuestros
          servicios de automatización de citas, enviar recordatorios y
          garantizar el correcto funcionamiento del sistema.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Protección de datos
        </h2>
        <p className="text-gray-400 mb-6">
          Implementamos medidas técnicas y organizativas razonables para
          proteger la información contra accesos no autorizados o uso indebido.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Contacto
        </h2>
        <p className="text-gray-400">
          Si tienes preguntas sobre esta Política de Privacidad,
          puedes contactarnos en: contacto@kerbo.co
        </p>

        <div className="mt-10">
          <a href="/" className="text-blue-500 hover:underline">
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}