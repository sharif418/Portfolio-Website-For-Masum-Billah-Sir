import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://masum.ailearnersbd.com"),
  title: "Masum Billah | Head of Administration & HR Specialist",
  description: "Dynamic administrative leader with expertise in Office Management, HR Operations, and Social Compliance. Transforming organizational vision into operational excellence.",
  keywords: ["Administration", "HR Specialist", "Leadership", "Office Management", "Social Compliance", "Bangladesh"],
  authors: [{ name: "Masum Billah" }],
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Masum Billah | Head of Administration & HR Specialist",
    description: "Transforming Organizational Vision into Operational Excellence",
    type: "website",
    images: [
      {
        url: "/profile.jpg",
        width: 800,
        height: 800,
        alt: "Masum Billah - Head of Administration & HR Specialist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Masum Billah | Head of Administration & HR Specialist",
    description: "Transforming Organizational Vision into Operational Excellence",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#0f172a" />
      </head>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
