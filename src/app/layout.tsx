import DynamicBreadcrumb from "@/components/navigation/dynamic-breadcrumb";
import Footer from "@/components/navigation/Footer";
import { MenuBarNav } from "@/components/navigation/MenuBarNav";
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
            <MenuBarNav />
            <DynamicBreadcrumb />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
