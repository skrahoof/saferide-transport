import "./globals.css";

export const metadata = {
  title: "SafeRide Transport | Safe Pick-Up & Drop Services",
  description:
    "Safe, reliable and affordable pick-up and drop transportation services for schools, tuition centers, extra-curricular activities and office commute. Lady drivers preferred for child and women safety.",

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
      "Safe and reliable pick-up & drop services with lady drivers preferred for children and women safety.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
