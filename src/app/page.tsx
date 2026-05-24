import Link from "next/link";

const tools = [
  {
    href: "/avif-to-png",
    title: "AVIF to PNG",
    description: "Convert AVIF images to PNG format. Perfect for compatibility with older software.",
    badge: "Popular",
  },
  {
    href: "/webp-to-png",
    title: "WebP to PNG",
    description: "Convert WebP images to PNG. Ideal for editing or sharing with universal support.",
    badge: "Popular",
  },
  {
    href: "/heic-to-jpg",
    title: "HEIC to JPG",
    description: "Convert iPhone HEIC photos to JPG. Share your photos anywhere.",
    badge: "Most Used",
  },
];

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      {/* Hero */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Convert Images Instantly.
          <br />
          <span className="text-blue-600">100% Private.</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-6">
          Free online image converter. Your files never leave your device — all
          processing happens right in your browser. No upload, no signup, no
          limits.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No file upload
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            No signup
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Unlimited conversions
          </span>
        </div>
      </section>

      {/* Tools grid */}
      <section className="grid md:grid-cols-3 gap-6 mb-16">
        {tools.map((tool) => (
          <Link
            key={tool.href}
            href={tool.href}
            className="group block p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600">
                {tool.title}
              </h2>
              {tool.badge && (
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                  {tool.badge}
                </span>
              )}
            </div>
            <p className="text-gray-600 text-sm">{tool.description}</p>
            <span className="inline-block mt-4 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
              Convert now &rarr;
            </span>
          </Link>
        ))}
      </section>

      {/* How it works */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Select Files</h3>
            <p className="text-gray-600 text-sm">
              Drop your images or click to browse. Supports batch conversion.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Convert Instantly</h3>
            <p className="text-gray-600 text-sm">
              Conversion happens in your browser. Nothing is uploaded to any server.
            </p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-blue-600 font-bold">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Download</h3>
            <p className="text-gray-600 text-sm">
              Get your converted files instantly. No watermarks, no quality loss.
            </p>
          </div>
        </div>
      </section>

      {/* Why privacy matters */}
      <section className="bg-gray-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Privacy Matters
        </h2>
        <p className="text-gray-600 mb-6">
          Most online converters upload your files to their servers. This means your
          personal photos, confidential documents, and sensitive images are stored on
          someone else&apos;s computer. ConvertPic is different:
        </p>
        <ul className="space-y-3 text-gray-700">
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Zero server processing</strong> — Your files are converted using your device&apos;s processing power</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>No data collection</strong> — We don&apos;t track, store, or sell any of your data</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>Works offline</strong> — Once loaded, the converter works without an internet connection</span>
          </li>
          <li className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span><strong>GDPR compliant by design</strong> — No cookies, no tracking, no consent popups needed</span>
          </li>
        </ul>
      </section>

      {/* SEO content */}
      <section className="mt-16 prose prose-gray max-w-none">
        <h2>Free Online Image Converter - No Upload Required</h2>
        <p>
          ConvertPic is a free browser-based image conversion tool that supports AVIF, WebP, and HEIC formats.
          Unlike traditional online converters that require you to upload files to remote servers,
          ConvertPic processes everything locally on your device using modern browser APIs.
        </p>
        <p>
          This means your photos and images stay completely private - they never leave your computer.
          Whether you need to convert iPhone HEIC photos to JPG for sharing, or convert modern AVIF/WebP
          images to PNG for compatibility, ConvertPic handles it instantly with zero quality loss.
        </p>
        <h3>Supported Conversions</h3>
        <ul>
          <li><strong>AVIF to PNG</strong> - Convert next-gen AVIF images to universally supported PNG format</li>
          <li><strong>WebP to PNG</strong> - Convert Google WebP images to PNG for editing and sharing</li>
          <li><strong>HEIC to JPG</strong> - Convert Apple iPhone photos (HEIC/HEIF) to standard JPG format</li>
        </ul>
      </section>
    </div>
  );
}
