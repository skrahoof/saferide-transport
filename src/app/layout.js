import "./globals.css";
import { Inter } from "next/font/google";

/* 🔹 Professional font for trust & readability */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* 🔹 SEO Metadata */
export const metadata = {
  title: "SafeRide Transport | Safe Pick-Up & Drop Services",
  description:
    "Safe, reliable and affordable pick-up and drop transportation services for schools, tuition centers, extra-curricular activities and daily commutes. Lady drivers preferred for child and women safety.",

  keywords: [
    "school pick up drop service",
    "lady driver transport service",
    "children transport service",
    "office pick up drop",
    "safe transport for women",
    "tuition pick up drop service",
  ],

  openGraph: {
    title: "SafeRide Transport",
    description:
      "Safe and reliable pick-up & drop services with trusted lady drivers for complete peace of mind.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
