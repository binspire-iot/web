export const seo = {
  metadataBase: new URL("https://decimomartin.vercel.app"),
  title: {
    default: "Binspire — A Pathway to Environmental Sustainability.",
    template: "Binspire — A Pathway to Environmental Sustainability.",
  },
  description: "A Pathway to Environmental Sustainability",
  openGraph: {
    title: "Binspire",
    description: "A Pathway to Environmental Sustainability",
    url: "https://decimomartin.vercel.app",
    siteName: "Binspire",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    } as const,
  },
  twitter: {
    title: "Binspire",
    card: "summary_large_image",
    description: "A Pathway to Environmental Sustainability",
  },
};
