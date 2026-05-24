"use client";

import { useState, useCallback, useRef } from "react";

interface ImageConverterProps {
  title: string;
  description: string;
  acceptFormats: string;
  outputFormat: "image/png" | "image/jpeg";
  outputExtension: string;
  convertFn?: (file: File) => Promise<Blob>;
}

export default function ImageConverter({
  title,
  description,
  acceptFormats,
  outputFormat,
  outputExtension,
  convertFn,
}: ImageConverterProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [converting, setConverting] = useState(false);
  const [results, setResults] = useState<{ name: string; url: string }[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [dragover, setDragover] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFiles = useCallback((newFiles: FileList | File[]) => {
    const fileArray = Array.from(newFiles);
    setFiles(fileArray);
    setResults([]);
    setError(null);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragover(false);
      if (e.dataTransfer.files.length > 0) {
        handleFiles(e.dataTransfer.files);
      }
    },
    [handleFiles]
  );

  const convertFiles = async () => {
    setConverting(true);
    setError(null);
    const newResults: { name: string; url: string }[] = [];

    try {
      for (const file of files) {
        let blob: Blob;

        if (convertFn) {
          blob = await convertFn(file);
        } else {
          // Default: use Canvas API
          blob = await canvasConvert(file, outputFormat);
        }

        const baseName = file.name.replace(/\.[^.]+$/, "");
        const url = URL.createObjectURL(blob);
        newResults.push({ name: `${baseName}.${outputExtension}`, url });
      }
      setResults(newResults);
    } catch (err) {
      setError(
        `Conversion failed: ${err instanceof Error ? err.message : "Unknown error"}. Please try a different file.`
      );
    } finally {
      setConverting(false);
    }
  };

  const canvasConvert = (
    file: File,
    format: string
  ): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext("2d");
        if (!ctx) {
          reject(new Error("Canvas not supported"));
          return;
        }
        ctx.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error("Conversion failed"));
          },
          format,
          0.95
        );
      };
      img.onerror = () => reject(new Error("Failed to load image"));
      img.src = URL.createObjectURL(file);
    });
  };

  const downloadAll = () => {
    results.forEach((result) => {
      const a = document.createElement("a");
      a.href = result.url;
      a.download = result.name;
      a.click();
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-3">{title}</h1>
      <p className="text-gray-600 mb-8 text-lg">{description}</p>

      {/* Privacy badge */}
      <div className="flex items-center gap-2 mb-6 text-sm text-green-700 bg-green-50 border border-green-200 rounded-lg px-4 py-2 w-fit">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
          />
        </svg>
        <span>
          100% Private - Files never leave your device
        </span>
      </div>

      {/* Drop zone */}
      <div
        className={`drop-zone border-2 border-dashed rounded-xl p-12 text-center cursor-pointer transition-colors ${
          dragover
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-blue-400 hover:bg-gray-50"
        }`}
        onDrop={handleDrop}
        onDragOver={(e) => {
          e.preventDefault();
          setDragover(true);
        }}
        onDragLeave={() => setDragover(false)}
        onClick={() => inputRef.current?.click()}
      >
        <svg
          className="w-12 h-12 mx-auto mb-4 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
        <p className="text-gray-600 text-lg mb-2">
          Drop your files here or{" "}
          <span className="text-blue-600 font-medium">browse</span>
        </p>
        <p className="text-gray-400 text-sm">
          Supports multiple files. Max 50MB per file.
        </p>
        <input
          ref={inputRef}
          type="file"
          accept={acceptFormats}
          multiple
          className="hidden"
          onChange={(e) => e.target.files && handleFiles(e.target.files)}
        />
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="mt-6">
          <div className="flex items-center justify-between mb-3">
            <p className="text-sm text-gray-600">
              {files.length} file{files.length > 1 ? "s" : ""} selected
            </p>
            <button
              onClick={() => {
                setFiles([]);
                setResults([]);
              }}
              className="text-sm text-red-500 hover:text-red-700"
            >
              Clear all
            </button>
          </div>
          <div className="space-y-2">
            {files.map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gray-50 rounded-lg px-4 py-2 text-sm"
              >
                <span className="text-gray-700 truncate max-w-xs">
                  {file.name}
                </span>
                <span className="text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </span>
              </div>
            ))}
          </div>

          {/* Convert button */}
          <button
            onClick={convertFiles}
            disabled={converting}
            className="mt-6 w-full bg-blue-600 text-white py-3 px-6 rounded-xl font-medium text-lg hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors"
          >
            {converting ? "Converting..." : `Convert to ${outputExtension.toUpperCase()}`}
          </button>
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="mt-4 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-red-700 text-sm">
          {error}
        </div>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-900">
              Converted Files
            </h2>
            {results.length > 1 && (
              <button
                onClick={downloadAll}
                className="text-sm bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
              >
                Download All
              </button>
            )}
          </div>
          <div className="space-y-3">
            {results.map((result, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg px-4 py-3"
              >
                <span className="text-green-800 font-medium">
                  {result.name}
                </span>
                <a
                  href={result.url}
                  download={result.name}
                  className="bg-green-600 text-white px-4 py-1.5 rounded-lg text-sm hover:bg-green-700"
                >
                  Download
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
