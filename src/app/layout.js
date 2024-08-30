import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/navbar/Navbar";
import Footer from "@/component/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Super First Next.js App",
    template: "%s | Super First Next.js App",
  },
  description: "A simple application to demonstrate Next.js features",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
