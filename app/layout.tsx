import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: 'swap',
});



export const metadata: Metadata = {
  title: "Ehack Technology | Enterprise Cybersecurity Solutions",
  description: "Ehack Technology provides cutting-edge cybersecurity services including VAPT, penetration testing, digital forensics, compliance audits, and more. Protect your business with industry-leading security experts.",
  keywords: "cybersecurity, penetration testing, VAPT, digital forensics, compliance audit, web security, mobile security, API security, red team, GDPR, PCI DSS, ISO 27001",
  openGraph: {
    title: "Ehack Technology | Enterprise Cybersecurity Solutions",
    description: "Protect your enterprise with cutting-edge cybersecurity solutions from Ehack Technology.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable}`} style={{ fontFamily: 'var(--font-body)' }}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );

}
