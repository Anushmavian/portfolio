import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Anushma Vibhu | Portfolio",
  description: "Full Stack Developer Portfolio of Anushma Vibhu",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
