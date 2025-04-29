import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Roboto({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My movies app",
  description: "This is the clon of TMDB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white `}>
        <nav>
          <Navbar />
        </nav>

        <main className="mt-20">{children}</main>
        <footer className="fixed bottom-0 left-0 right-0 bg-gray-950 py-5 z-50">
          <div className="container mx-auto">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
