import { Outfit, Inter } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["400", "600", "700", "900"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Oncology Mitra (OM) - We Walk With You",
  description: "Specialized oncology therapy, counseling, and support for your cancer journey. Connect instantly with specialized oncology counselors via video, voice, or chat. A safe, confidential space for you and your family.",
  keywords: "oncology support, cancer therapy, oncology counseling, Oncology Mitra, OM app, cancer journey support, caregiver support",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#FAF9FB] text-[#1F1D2E]">{children}</body>
    </html>
  );
}

