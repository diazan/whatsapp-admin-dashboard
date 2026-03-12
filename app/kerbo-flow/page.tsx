export default function KerboFlowPage() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reduce hasta 40% tus no‑shows con automatización por WhatsApp
        </h1>

        <p className="max-w-2xl text-lg text-gray-400 mb-8">
          Kerbo Flow automatiza recordatorios de citas y permite a tus clientes
          confirmar o reagendar en un solo clic, sin llamadas y sin esfuerzo manual.
        </p>

        <a
          href="https://wa.me/TUNUMERO"
          className="bg-green-600 hover:bg-green-700 transition px-6 py-3 rounded-lg font-medium"
        >
          Probar ahora en WhatsApp
        </a>
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
          href="https://wa.me/573163115687"
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