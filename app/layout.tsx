import type { Metadata } from "next";
import { Geist_Mono, Poppins } from "next/font/google";
import Script from "next/script";
import "./globals.css";

// Load Poppins font
const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

// Load Geist Mono font
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" suppressHydrationWarning>
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

        {/* Tidio Chat (Optional, Uncomment to Use) */}
        {/* <Script strategy="lazyOnload" src="//code.tidio.co/qhhancpt76pkxaxn1jz28irsb5lcuszf.js" /> */}
      </head>
      
      <body className={`${poppins.variable} ${geistMono.variable} antialiased container mx-auto`}>
        {children}
      </body>
    </html>
  );
}
