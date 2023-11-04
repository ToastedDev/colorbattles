import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Navbar from "~/components/navbar";
import "./globals.css";
import "./odometer.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://colorbattles.vercel.app"),
  title: {
    default: "Color Battles",
    template: "%s — Color Battles",
  },
  description: "Comparing different colors because it's fun.",
  themeColor: "#ffffff",
  twitter: {
    card: "summary",
    creator: "@ToastedDev",
    creatorId: "1145171094556426240",
  },
  openGraph: {
    siteName: "Color Battles",
    type: "website",
    url: "/",
    images: [
      {
        url: "https://colorbattles.vercel.app/logo.png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.className, roboto.variable].join(" ")}>
      <body className="bg-neutral-900 text-white flex h-screen flex-col">
        <Navbar />
        <main className="flex-grow p-4">{children}</main>
      </body>
    </html>
  );
}
