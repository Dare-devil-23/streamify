import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/common/header";

export const metadata: Metadata = {
  title: "Streamify",
  description: "Analytics dashboard for music streaming",
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }: Readonly<Props>) => {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Prata&display=swap" rel="stylesheet" />
      </head>
      <body
        className="antialiased dark:bg-black bg-white text-black dark:text-white transition-all duration-500 flex flex-col min-h-dvh container mx-auto px-5 lg:px-0"
      >
        <Header />
        <main className="grow">
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;