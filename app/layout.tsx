import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Masum Billah | Head of Administration & HR Specialist",
  description: "Dynamic administrative leader with expertise in Office Management, HR Operations, and Social Compliance. Transforming organizational vision into operational excellence.",
  keywords: ["Administration", "HR Specialist", "Leadership", "Office Management", "Social Compliance", "Bangladesh"],
  authors: [{ name: "Masum Billah" }],
  openGraph: {
    title: "Masum Billah | Head of Administration & HR Specialist",
    description: "Transforming Organizational Vision into Operational Excellence",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        {children}
      </body>
    </html>
  );
}
