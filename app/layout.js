import "./globals.css";
import { Inter } from "next/font/google";

import Header from "./_components/Header";
import Footers from "./_components/Footers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Artisan Woodworks",
  description: "more than just furniture makers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} bg-base text-text`}
      >
        <Header />
        {children}
        <Footers />
      </body>
    </html>
  );
}
