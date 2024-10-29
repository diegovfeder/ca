import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Footer, Header } from "@/components";

// const gloriolaDisplay = localFont({
//   src: [
//     {
//       path: "./fonts/gloriola-display/GloriolaDisplayBlack.otf",
//       weight: "900",
//       style: "normal",
//     },
//     {
//       path: "./fonts/gloriola-display/GloriolaDisplayFat.otf",
//       weight: "800",
//       style: "normal",
//     },
//     {
//       path: "./fonts/gloriola-display/GloriolaDisplayHair.otf",
//       weight: "700",
//       style: "normal",
//     },
//     {
//       path: "./fonts/gloriola-display/GloriolaDisplayThin.otf",
//       weight: "400",
//       style: "normal",
//     },
//   ],
//   variable: "--font-gloriola-display",
// });

// FIXME: Check if this font is being applied
// Gloriola
const gloriola = localFont({
  src: [
    {
      path: "./fonts/gloriola/GloriolaStdBold.otf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/gloriola/GloriolaStdBoldIt.otf",
      weight: "900",
      style: "italic",
    },
    {
      path: "./fonts/gloriola/GloriolaStdLight.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/gloriola/GloriolaStdLightIt.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/gloriola/GloriolaStdMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/gloriola/GloriolaStdMediumIt.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/gloriola/GloriolaStdRegular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/gloriola/GloriolaStdRegularIt.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/gloriola/GloriolaStdSemiBold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/gloriola/GloriolaStdSemiBoldIt.otf",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-gloriola",
});

export const metadata: Metadata = {
  title: "Caroline Andrusko | Arquitetos",
  description:
    "Em 2017, Caroline inaugurou seu novo escritório. Caroline Andrusko Arquitetos é fruto do seu crescimento profissional e da sua capacidade de compreender a identidade única de cada cliente. Cuidado com os detalhes e dedicação em busca da perfeição em cada projeto são sua maior marca.",
  keywords: [
    "caroline andrusko",
    "arquitetos",
    "arquitetura",
    "perfeição",
    "detalhes",
    "projetos",
    "plantas",
    "interiores",
    "paisagismo",
    "acompanhamento de obra",
  ],
  verification: {
    google: "8fgpYBOoe9Lg_H-DUvE5rz5D_HNXFsm1gvD0EHBGX5I",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-72x72.png", sizes: "72x72" },
      { url: "/apple-touch-icon-114x114.png", sizes: "114x114" },
      { url: "/apple-touch-icon-152x152.png", sizes: "152x152" },
    ],
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://carolineandrusko.com.br",
    siteName: "Caroline Andrusko | Arquitetos",
    title: "Caroline Andrusko | Arquitetos",
    description:
      "Em 2017, Caroline inaugurou seu novo escritório. Caroline Andrusko Arquitetos é fruto do seu crescimento profissional e da sua capacidade de compreender a identidade única de cada cliente.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Caroline Andrusko Arquitetos",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gloriola.variable} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
