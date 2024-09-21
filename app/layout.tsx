import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "도승 노트 앱",
  description: "혼자 메모하려고 만든 앱",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <title>도승 노트 앱</title>
        <meta name="description" content="혼자 메모하려고 만든 앱" />
        <meta property="og:url" content="https://ideanote-eight.vercel.app" />
        <meta property="og:title" content="도승 노트 앱" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://i.ibb.co/8cfPHSD/note.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
