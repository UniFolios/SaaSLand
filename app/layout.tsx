import type { Metadata } from "next";
import "@/styles/globals.css";
import { headers } from 'next/headers'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: "SaaSLand - SaaS Landing Page",
  description: "A SaaS Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const headersList = headers()
  const isAdmin = headersList.get('x-route-type') === 'admin'

  return (
    <html lang="en">
      <body>
        {!isAdmin && <Navbar />}
        <main>{children}</main>
        {!isAdmin && <Footer />}
      </body>
    </html>
  )
}
