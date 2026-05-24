"use client";

import dynamic from "next/dynamic";

const HeicConverter = dynamic(() => import("./HeicConverter"), { ssr: false });

export default function HeicToJpgPage() {
  return <HeicConverter />;
}
