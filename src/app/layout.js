import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Providers from "./Providers";
import Tabs from "@/components/Tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Movie App",
  description: "Search movies and show details",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Tabs />
          {children}
        </Providers>
      </body>
    </html>
  );
}
