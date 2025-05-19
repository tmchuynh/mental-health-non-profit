import DynamicBreadcrumb from "@/components/navigation/dynamic-breadcrumb";
import { NavBar } from "@/components/navigation/NavBar";
import "./globals.css";
import { Providers } from "./provider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="relative flex flex-col min-h-screen">
        <Providers>
          <main className="flex-grow md:pb-0">
            <NavBar />
            <DynamicBreadcrumb />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
