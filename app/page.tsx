export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Automatización inteligente para negocios con agenda
        </h1>

        <p className="max-w-2xl text-lg text-gray-400 mb-8">
          En Kerbo desarrollamos herramientas SaaS que ayudan a empresas a reducir cancelaciones,
          optimizar su operación y aumentar ingresos mediante automatización por WhatsApp.
        </p>

        <a
          href="/kerbo-flow"
          className="bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded-lg font-medium"
        >
          Conoce Kerbo Flow
        </a>
      </section>

      {/* Producto destacado */}
      <section className="bg-zinc-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Nuestro primer producto
        </h2>

        <h3 className="text-2xl font-bold mb-6 text-blue-500">
          Kerbo Flow
        </h3>

        <p className="max-w-xl mx-auto text-gray-400 mb-8">
          Automatización de citas por WhatsApp diseñada para reducir no‑shows,
          mejorar la confirmación de clientes y aumentar ingresos sin contratar más personal.
        </p>

        <a
          href="/kerbo-flow"
          className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
        >
          Ver cómo funciona
        </a>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm space-y-2">
        <div>
          © {new Date().getFullYear()} Kerbo. Todos los derechos reservados.
        </div>

        <div className="flex justify-center gap-6">
          <a href="/privacy-policy" className="hover:text-white transition">
            Política de Privacidad
          </a>
          <a href="/terms" className="hover:text-white transition">
            Términos y Condiciones
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contacto
          </a>
        </div>
      </footer>

    </div>
  );
}