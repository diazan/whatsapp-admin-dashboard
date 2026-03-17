import Image from "next/image";
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Hero */}
<section className="relative flex flex-col items-center justify-center text-center px-6 py-20 md:py-24 bg-black overflow-hidden">
  
  <div className="absolute inset-0 animate-glow"></div>

  {/* Logo absoluto */}
  <div className="absolute -top-[2px] -top-8 left-1/2 -translate-x-1/2 z-20">
    <Image
      src="/kerbo_no_bg.png"
      alt="Kerbo Logo"
      width={260}
      height={260}
      priority
    />
  </div>

  <div className="relative z-10 max-w-6xl">

<h1 className="text-[2.7rem] md:text-[3.4rem] font-bold mt-20 mb-6 leading-tight">

  Automatización inteligente para negocios
  <br />
  <span className="whitespace-nowrap">
    con agenda
  </span>
</h1>

    <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 leading-relaxed">
      En Kerbo desarrollamos herramientas SaaS que ayudan a empresas a reducir
      cancelaciones, optimizar su operación y aumentar ingresos mediante automatización por WhatsApp.
    </p>

    <a
      href="/kerbo-flow"
      className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-90 transition px-8 py-4 rounded-xl font-medium text-lg shadow-lg"
    >
      Conoce Kerbo Flow
    </a>

  </div>

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