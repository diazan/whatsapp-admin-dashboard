import Image from "next/image";
export default function KerboFlowPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Hero */}
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 bg-black overflow-hidden">
    
    <div className="absolute inset-0 animate-glow-green"></div>

      {/* Logo absoluto */}
  <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20">
    <Image
      src="/kerbo_no_bg.png"
      alt="Kerbo Logo"
      width={260}
      height={260}
      priority
    />
  </div>

    <div className="relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold mt-17 mb-6">
        Reduce hasta 40% tus no‑shows con automatización por WhatsApp
        </h1>

        <p className="max-w-2xl mx-auto text-lg text-gray-300 mb-8 leading-relaxed">
        Kerbo Flow automatiza recordatorios de citas y permite a tus clientes confirmar
        o reagendar en un solo clic, sin llamadas y sin esfuerzo manual.
        </p>

        <a
        href="https://wa.me/573227249031?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20servicio"
        className="bg-green-600 hover:bg-green-700 hover:scale-105 transform transition px-8 py-4 rounded-xl font-medium text-lg shadow-lg"
        >
        Probar ahora en WhatsApp
        </a>
    </div>

    </section>

      {/* Cómo funciona */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Cómo funciona
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="text-xl font-bold mb-3">1. Se agenda la cita</h3>
              <p className="text-gray-400">
                Registras la cita en tu sistema como siempre.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                2. Envío automático
              </h3>
              <p className="text-gray-400">
                El sistema envía recordatorios automáticos por WhatsApp.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-3">
                3. Confirmación o reagendamiento
              </h3>
              <p className="text-gray-400">
                El cliente confirma o solicita cambio en segundos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Beneficios clave
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
          <div>✅ Más citas confirmadas</div>
          <div>✅ Reducción de cancelaciones</div>
          <div>✅ Mejor organización</div>
          <div>✅ Más ingresos sin contratar personal</div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-zinc-900 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">
          Automatiza tu agenda hoy
        </h2>

        <a
          href="https://wa.me/573227249031?text=Hola%2C%20me%20interesa%20conocer%20m%C3%A1s%20sobre%20el%20servicio"
          className="bg-green-600 hover:bg-green-700 transition px-8 py-4 rounded-lg font-medium text-lg"
        >
          Hablar por WhatsApp
        </a>
      </section>

      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Kerbo Flow.
      </footer>

    </div>
  );
}