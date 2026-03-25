import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DentiBot - Clínica Odontológica",
  description:
    "Clínica odontológica en Cali. Atención profesional, tecnología de vanguardia y cuidado integral para tu salud dental.",
  openGraph: {
    title: "DentiBot - Clínica Odontológica",
    description:
      "Clínica odontológica en Cali. Atención profesional y cuidado integral para tu salud dental.",
    type: "website",
    url: "https://dentibot.dentimoderna.lat",
  },
};

export default function DentiBotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}