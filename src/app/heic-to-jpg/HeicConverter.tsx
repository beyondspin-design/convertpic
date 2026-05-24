"use client";

import ImageConverter from "../components/ImageConverter";
import heic2any from "heic2any";

export default function HeicConverter() {
  const convertHeic = async (file: File): Promise<Blob> => {
    const result = await heic2any({
      blob: file,
      toType: "image/jpeg",
      quality: 0.92,
    });
    if (Array.isArray(result)) {
      return result[0];
    }
    return result;
  };

  return (
    <>
      <ImageConverter
        title="HEIC to JPG Converter"
        description="Convert iPhone HEIC/HEIF photos to JPG format instantly. Free, private, and unlimited."
        acceptFormats=".heic,.heif,image/heic,image/heif"
        outputFormat="image/jpeg"
        outputExtension="jpg"
        convertFn={convertHeic}
      />
      <div className="max-w-3xl mx-auto px-4 pb-12 prose prose-gray">
        <h2>About HEIC to JPG Conversion</h2>
        <p>
          HEIC (High Efficiency Image Container) is the default photo format on iPhone and iPad.
          While it produces smaller file sizes than JPG, many Windows computers, Android devices,
          and websites still can&apos;t open HEIC files directly.
        </p>
        <h3>Why Convert HEIC to JPG?</h3>
        <ul>
          <li>Share iPhone photos with Windows and Android users</li>
          <li>Upload photos to websites that don&apos;t support HEIC</li>
          <li>Open photos in older image editing software</li>
          <li>Attach photos to emails without compatibility issues</li>
          <li>Use photos in documents and presentations</li>
        </ul>
        <h3>How to Convert HEIC to JPG</h3>
        <ol>
          <li>Transfer your HEIC photos from your iPhone to your computer</li>
          <li>Drop the HEIC file(s) into the converter above</li>
          <li>Click &quot;Convert to JPG&quot;</li>
          <li>Download your converted JPG file(s)</li>
        </ol>
        <p>
          This converter uses the heic2any library to decode HEIC files directly in your browser.
          Your personal photos are never uploaded to any server — they stay completely private on your device.
        </p>
      </div>
    </>
  );
}
