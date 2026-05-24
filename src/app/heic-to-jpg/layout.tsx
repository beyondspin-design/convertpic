import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HEIC to JPG Converter - Free Online, No Upload",
  description:
    "Convert iPhone HEIC/HEIF photos to JPG format for free. 100% browser-based, your files never leave your device. No signup, no limits, instant conversion.",
  keywords: [
    "heic to jpg",
    "heic converter",
    "convert heic to jpg",
    "heic to jpeg online",
    "iphone photo converter",
    "heif to jpg",
  ],
};

export default function HeicToJpgLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
