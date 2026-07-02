import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Prompt/Pack — 500 AI Prompts for Developers",
  description:
    "500 workflow-tested AI prompts for code review, debugging, refactoring, testing, docs, and architecture. Built by a developer, not a prompt-marketer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <head>
        <script src="https://gumroad.com/js/gumroad.js" async></script>
      </head>
      <body>{children}</body>
    </html>
  );
}