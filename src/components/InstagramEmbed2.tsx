"use client";
import dynamic from "next/dynamic";

const InstagramEmbed = dynamic(
  () => import("react-social-media-embed").then((mod) => mod.InstagramEmbed),
  { ssr: false },
);

export default function InstagramEmbed2() {
  return <InstagramEmbed url="https://www.instagram.com/orhan.elk.bt/" />;
}
