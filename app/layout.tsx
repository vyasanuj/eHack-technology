import type { Metadata, Viewport } from "next";
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
  title: "eHack Global Technology | Enterprise Cybersecurity Solutions",
  description: "eHack Global Technology provides cutting-edge cybersecurity services including VAPT, penetration testing, digital forensics, compliance audits, and more. Protect your business with industry-leading security experts.",
  keywords: "cybersecurity, penetration testing, VAPT, digital forensics, compliance audit, web security, mobile security, API security, red team, GDPR, PCI DSS, ISO 27001",
  openGraph: {
    title: "eHack Global Technology | Enterprise Cybersecurity Solutions",
    description: "Protect your enterprise with cutting-edge cybersecurity solutions from eHack Global Technology.",
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' }
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} overflow-x-hidden`} style={{ fontFamily: 'var(--font-body)' }}>
        <Header />
        <main className="overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );

}
