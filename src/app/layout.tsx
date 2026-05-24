import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ConvertPic - Free Online Image Converter | Privacy First",
    template: "%s | ConvertPic",
  },
  description:
    "Convert images for free. AVIF, WebP, HEIC to PNG/JPG. 100% browser-based - your files never leave your device. No upload, no signup, no limits.",
  keywords: [
    "image converter",
    "avif to png",
    "webp to png",
    "heic to jpg",
    "online converter",
    "free image converter",
    "privacy image converter",
  ],
  robots: { index: true, follow: true },
  verification: {
    google: "avzu-Ds2mXCFg880e4OLTgDmZ6Tzoo9Wlfawn7Pzon8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-geist-sans)]">
        <nav className="border-b border-gray-100 bg-white">
          <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              ConvertPic
            </Link>
            <div className="flex gap-4 text-sm text-gray-600">
              <Link href="/avif-to-png" className="hover:text-blue-600">
                AVIF to PNG
              </Link>
              <Link href="/webp-to-png" className="hover:text-blue-600">
                WebP to PNG
              </Link>
              <Link href="/heic-to-jpg" className="hover:text-blue-600">
                HEIC to JPG
              </Link>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="border-t border-gray-100 mt-20 py-8 text-center text-sm text-gray-500">
          <div className="max-w-5xl mx-auto px-4">
            <p className="mb-2 font-medium text-gray-700">
              Your files never leave your device. All conversion happens in your
              browser.
            </p>
            <p>
              &copy; 2024 ConvertPic. Free online image converter.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
