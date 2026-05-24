import type { Metadata } from "next";
import ImageConverter from "../components/ImageConverter";

export const metadata: Metadata = {
  title: "AVIF to PNG Converter - Free Online, No Upload",
  description:
    "Convert AVIF images to PNG format for free. 100% browser-based, your files never leave your device. No signup, no limits, instant conversion.",
  keywords: [
    "avif to png",
    "avif converter",
    "convert avif to png",
    "avif to png online",
    "free avif converter",
  ],
};

export default function AvifToPng() {
  return (
    <>
      <ImageConverter
        title="AVIF to PNG Converter"
        description="Convert AVIF images to PNG format instantly. Free, private, and unlimited."
        acceptFormats=".avif,image/avif"
        outputFormat="image/png"
        outputExtension="png"
      />
      <div className="max-w-3xl mx-auto px-4 pb-12 prose prose-gray">
        <h2>About AVIF to PNG Conversion</h2>
        <p>
          AVIF (AV1 Image File Format) is a modern image format that offers excellent compression.
          However, not all software supports AVIF yet. Converting to PNG ensures your images
          work everywhere — in email, older browsers, image editors, and more.
        </p>
        <h3>Why Convert AVIF to PNG?</h3>
        <ul>
          <li>PNG is universally supported across all devices and software</li>
          <li>PNG preserves image quality with lossless compression</li>
          <li>PNG supports transparency (alpha channel)</li>
          <li>Required for many design tools and print workflows</li>
        </ul>
        <h3>How to Convert AVIF to PNG</h3>
        <ol>
          <li>Drop your AVIF file(s) into the converter above</li>
          <li>Click &quot;Convert to PNG&quot;</li>
          <li>Download your converted PNG file(s)</li>
        </ol>
        <p>
          All conversion happens in your browser using the Canvas API. Your files are never
          uploaded to any server, making this the most private AVIF converter available online.
        </p>
      </div>
    </>
  );
}
