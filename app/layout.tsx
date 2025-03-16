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
  const pathname = headersList.get('x-pathname') || ''
  const isAdminRoute = pathname.startsWith('/admin')

  return (
    <html lang="en">
      <body>
        {!isAdminRoute && <Navbar />}
        <main>{children}</main>
        {!isAdminRoute && <Footer />}
      </body>
    </html>
  )
}
