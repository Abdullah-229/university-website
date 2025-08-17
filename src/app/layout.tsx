import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "University Website",
  description: "University site built with Next.js & Supabase",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
