import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Load Poppins font
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Preston Mayieka",
  description: "This is the official Portfolio of Preston Mayieka",
  keywords: "Preston Mayieka, portfolio, web development, design, projects, skills",
  authors: [{ name: "Preston Mayieka" }],
  icons: { icon: "./" },
  robots: "follow, index",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US" suppressHydrationWarning className={poppins.variable}>
      <head>
        {/* Google Tag Manager */}
        <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-HSYH0BM0Q3" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){ dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-HSYH0BM0Q3');
          `}
        </Script>
        {/* Google Search Index */}
        <meta name="google-site-verification" content="5uSVJB8rekMOL-naF-Jylengz5vo1dzwu962RCkzkp4" />
      </head>

      <body className={`font-poppins "antialiased mx-auto overflow-x-hidden  bg-gray-900 text-white`}>
        {children}
      </body>
    </html>
  );
}
