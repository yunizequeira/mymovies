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
  metadataBase: new URL("https://mymovies-omega.vercel.app"),
  title: "My movies app",
  description: "This is the clon of TMDB",
  openGraph: {
    images: '/opengraph-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="google-site-verification" content="R_aklkxInue3Wj_ZiATN0L4EHGKRNzHiJXJ0h_uQPU4" />
      <body className={`${inter.className} bg-gray-950 text-white `}>
        <nav>
          <Navbar />
        </nav>

        <main className="mt-20">{children}</main>
        <footer className="bg-gray-950 py-5">
          <div className="container mx-auto">
            <Footer />
          </div>
        </footer>
      </body>
    </html>
  );
}
