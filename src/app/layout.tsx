import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NGO Foundation - Empowering Lives Through Skill Development",
  description:
    "Transforming potential into success by providing tools, resources, and training needed to thrive in today's job market.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
