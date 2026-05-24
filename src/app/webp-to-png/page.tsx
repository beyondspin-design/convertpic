import type { Metadata } from "next";
import ImageConverter from "../components/ImageConverter";

export const metadata: Metadata = {
  title: "WebP to PNG Converter - Free Online, No Upload",
  description:
    "Convert WebP images to PNG format for free. 100% browser-based, your files never leave your device. No signup, no limits, instant conversion.",
  keywords: [
    "webp to png",
    "webp converter",
    "convert webp to png",
    "webp to png online",
    "free webp converter",
  ],
};

export default function WebpToPng() {
  return (
    <>
      <ImageConverter
        title="WebP to PNG Converter"
        description="Convert WebP images to PNG format instantly. Free, private, and unlimited."
        acceptFormats=".webp,image/webp"
        outputFormat="image/png"
        outputExtension="png"
      />
      <div className="max-w-3xl mx-auto px-4 pb-12 prose prose-gray">
        <h2>About WebP to PNG Conversion</h2>
        <p>
          WebP is a modern image format developed by Google that provides superior compression.
          While most browsers support WebP, many desktop applications, image editors, and
          older systems still require PNG or JPG format.
        </p>
        <h3>Why Convert WebP to PNG?</h3>
        <ul>
          <li>Open WebP files in Photoshop, Illustrator, and other design tools</li>
          <li>Share images on platforms that don&apos;t support WebP</li>
          <li>Edit images in software that requires PNG format</li>
          <li>Preserve transparency when converting from WebP</li>
          <li>Use in print workflows that require standard formats</li>
        </ul>
        <h3>How to Convert WebP to PNG</h3>
        <ol>
          <li>Drop your WebP file(s) into the converter above</li>
          <li>Click &quot;Convert to PNG&quot;</li>
          <li>Download your converted PNG file(s)</li>
        </ol>
        <p>
          This converter processes files entirely in your browser. No server upload means
          faster conversion and complete privacy for your images.
        </p>
      </div>
    </>
  );
}
