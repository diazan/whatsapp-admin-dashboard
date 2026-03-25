import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DentiModerna — Clínica Dental Profesional | Cali, Colombia",
  description:
    "Clínica dental moderna en Cali. Servicios de ortodoncia, implantes, blanqueamiento y más. Agenda tu cita en minutos por WhatsApp. Atención personalizada y tecnología de vanguardia.",
  keywords:
    "dentista Cali, clínica dental Cali, ortodoncia Cali, implantes dentales, blanqueamiento dental, dentimoderna",
  authors: [{ name: "DentiModerna" }],
  openGraph: {
    title: "DentiModerna — Clínica Dental Profesional",
    description:
      "Agenda tu cita dental en Cali por WhatsApp. Ortodoncia, implantes, blanqueamiento y más.",
    type: "website",
    locale: "es_MX",
    url: "https://dentimoderna.lat",
    siteName: "DentiModerna",
    images: [
      {
        url: "/dentimoderna/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DentiModerna Clínica Dental",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DentiModerna — Clínica Dental Profesional",
    description: "Agenda tu cita dental en Cali por WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0ea5e9",
};

export default function DentiModernaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX">
      <head>
        {/* Schema.org — Dentist (requerido por Meta para verificación) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Dentist",
              name: "DentiModerna",
              image: "https://dentimoderna.lat/dentimoderna/og-image.jpg",
              url: "https://dentimoderna.lat",
              telephone: "+57-316-211-5687",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle 5 Norte # 8N-51, Consultorio 3",
                addressLocality: "Cali",
                addressRegion: "Valle del Cauca",
                postalCode: "760001",
                addressCountry: "CO",
              },
              geo: {
                "@type": "GeoCoordinates",
                    latitude: 3.4516,
                    longitude: -76.5320,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "09:00",
                  closes: "19:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "09:00",
                  closes: "14:00",
                },
              ],
              sameAs: [
                "https://www.facebook.com/dentimoderna",
                "https://www.instagram.com/dentimoderna",
              ],
              priceRange: "$$",
            }),
          }}
        />
        <link rel="canonical" href="https://dentimoderna.lat" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, fontFamily: "'Inter', sans-serif" }}>
        {children}
      </body>
    </html>
  );
}