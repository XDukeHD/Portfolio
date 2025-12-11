import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Retrospectiva EMED 2025",
  description: "Uma pequena homenagem aos nossos mestres.",
  openGraph: {
    title: "Retrospectiva EMED 2025",
    description: "Uma pequena homenagem aos nossos mestres.",
    images: [
      {
        url: "/assets-emed/mc.png", 
        width: 1200,
        height: 630,
        alt: "Retrospectiva EMED 2025",
      },
    ],
    type: "website",
  },
};

export default function EmedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
