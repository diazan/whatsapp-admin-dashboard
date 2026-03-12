export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">
          Términos y Condiciones
        </h1>

        <p className="mb-6 text-gray-400">
          Estos Términos y Condiciones regulan el uso de los servicios
          proporcionados por Kerbo y sus productos, incluyendo Kerbo Flow.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Uso del servicio
        </h2>
        <p className="text-gray-400 mb-6">
          El usuario se compromete a utilizar el servicio de manera legal
          y conforme a las normativas aplicables. Kerbo no se responsabiliza
          por el uso indebido del sistema por parte de terceros.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Responsabilidad
        </h2>
        <p className="text-gray-400 mb-6">
          Kerbo proporciona el servicio "tal cual" y no garantiza que el
          sistema esté libre de interrupciones. Sin embargo, trabajamos
          constantemente para asegurar estabilidad y seguridad.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Modificaciones
        </h2>
        <p className="text-gray-400 mb-6">
          Nos reservamos el derecho de modificar estos términos en cualquier
          momento. Los cambios serán publicados en esta página.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-4">
          Contacto
        </h2>
        <p className="text-gray-400">
          Para consultas relacionadas con estos términos, contáctanos en:
          contacto@kerbo.co
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