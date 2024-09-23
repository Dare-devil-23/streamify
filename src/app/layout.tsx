import type { Metadata } from "next";
import Header from "@/src/components/common/header";
import Head from "next/head";
import "@/src/styles/globals.css";
import StoreProvider from "./StoreProvider";

export const metadata: Metadata = {
  title: "Streamify",
  description: "Analytics dashboard for music streaming"
};

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }: Readonly<Props>) => {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body
        className="antialiased text-white bg-black transition-all duration-500 flex flex-col min-h-dvh container mx-auto px-5 lg:px-0"
      >
        <Header />
        <main className="grow">
          <StoreProvider>
            {children}
          </StoreProvider>
        </main>
      </body>
    </html>
  );
}

export default RootLayout;