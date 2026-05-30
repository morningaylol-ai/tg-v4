import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BEL_MONARH | Private Digital Headquarters",
  description: "Dark royal cyberpunk operating system style portfolio for BEL_MONARH.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
