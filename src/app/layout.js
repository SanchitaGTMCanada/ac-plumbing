import "./globals.css";
import Header from "@/components/layout/Header/Header";
// import Footer from "@/components/layout/Footer/Footer";

export const metadata = {
  metadataBase: new URL("https://acplumbingheating.ca/"),

  title: {
    default: "AC Plumbing & Heating | Plumbing & Heating Services in Canada",
    template: "%s | AC Plumbing & Heating",
  },

  description:
    "AC Plumbing & Heating provides professional plumbing, heating, boiler maintenance, furnace maintenance, water heater servicing, HVAC maintenance, and emergency plumbing services across Canada.",

  keywords: [
    "AC Plumbing",
    "Plumbing Services",
    "Heating Services",
    "Boiler Maintenance",
    "Combi Boiler",
    "Tankless Water Heater",
    "Water Heater Maintenance",
    "HVAC Maintenance",
    "Furnace Maintenance",
    "Gas Fireplace Maintenance",
    "HRV Maintenance",
    "Humidifier Maintenance",
    "MUA Unit Testing",
    "Emergency Plumbing",
    "Canada Plumbing",
  ],

  authors: [
    {
      name: "AC Plumbing & Heating",
    },
  ],

  creator: "AC Plumbing & Heating",

  publisher: "AC Plumbing & Heating",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "AC Plumbing & Heating",
    description:
      "Professional Plumbing, Heating, Boiler, Furnace & HVAC Maintenance Services Across Canada.",

    url: "https://acplumbingheating.ca/",

    siteName: "AC Plumbing & Heating",

    locale: "en_CA",

    type: "website",

    images: [
      {
        url: "/seo/og-image.png",
        width: 1200,
        height: 630,
        alt: "AC Plumbing & Heating",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AC Plumbing & Heating",
    description:
      "Professional Plumbing & Heating Services Across Canada.",
    images: ["/seo/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  category: "Plumbing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        {children}

        {/* <Footer /> */}
      </body>
    </html>
  );
}