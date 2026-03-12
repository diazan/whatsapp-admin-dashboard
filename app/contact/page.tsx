export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Contacto</h1>

        <p className="text-gray-400 mb-6">
          Si deseas más información sobre nuestros productos o servicios,
          puedes contactarnos a través de los siguientes medios:
        </p>

        <ul className="text-gray-300 space-y-4">
          <li>Email: contacto@kerbo.co</li>
          <li>WhatsApp: +573163115687</li>
        </ul>

        <div className="mt-10">
          <a href="/" className="text-blue-500 hover:underline">
            Volver al inicio
          </a>
        </div>
      </div>
    </div>
  );
}