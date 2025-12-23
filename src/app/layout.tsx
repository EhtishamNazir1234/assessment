import "./globals.css";
import { AppProvider } from "@/context/appContext";
import Link from "next/link";

export const metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME || "LMS App",
  description: "A modern Learning Management System",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProvider>
          <nav className="bg-white shadow-sm border-b">
            <div className="max-w-7xl mx-auto px-4 py-4 flex gap-6">
              <Link href="/" className="font-bold text-blue-600">
                Home
              </Link>
              <Link href="/react-features" className="hover:text-blue-600">
                React Features
              </Link>
              <Link href="/courses" className="hover:text-blue-600">
                Courses
              </Link>
              <Link href="/dashboard" className="hover:text-blue-600">
                Dashboard
              </Link>
            </div>
          </nav>
          <main className="max-w-7xl mx-auto px-4 py-8">{children}</main>
        </AppProvider>
      </body>
    </html>
  );
}
