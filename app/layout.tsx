import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://iryna-matlaieva.vercel.app"; // TODO: замінити на реальний домен після підключення

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ірина Матлаєва — психологиня, гештальт-терапевтка | Київ, онлайн",
    template: "%s | Ірина Матлаєва",
  },
  description:
    "Ірина Матлаєва — психологиня, яка працює в гештальт-підході. Індивідуальна терапія онлайн і в Києві для людей, які хочуть краще розуміти себе, свої реакції, стосунки й спосіб проживати життя у швидкому темпі.",
  keywords: [
    "психолог",
    "гештальт-терапевт",
    "психотерапія",
    "індивідуальна терапія",
    "психолог онлайн",
    "психотерапевт онлайн",
    "гештальт терапевт",
    "психолог Київ",
    "психолог IT",
    "психотерапевт Київ",
    "гештальт-терапія",
    "гештальт терапевт Київ",
    "вигорання психолог",
    "тривога психолог",
    "психолог онлайн Україна",
    "психологічна підтримка компаній",
    "корпоративний психолог",
    "індивідуальна терапія Київ",
    "психолог для бізнесу",
    "групова терапія Київ",
    "психологічні майстерні",
    "психологічний ретрит",
    "гештальт підхід",
    "психолог вигорання",
    "межі в стосунках психолог",
    "внутрішній критик терапія",
    "психолог для керівників",
    "вигорання",
    "тривога",
    "межі",
    "самооцінка",
    "перфекціонізм",
    "стосунки",
    "прокрастинація",
    "внутрішній критик",
    "контроль",
    "емоційне виснаження",
    "тривожність",
    "стрес",
    "криза",
    "контакт із собою",
    "емоційна близькість",
    // IT
    "психолог для IT",
    "психолог для програмістів",
    "психолог для розробників",

    // Майбутній розвиток
    "парна терапія",
    "терапія для пар",
    "сімейна терапія",
    "сімейний психолог",
    "консультація для пар",
  ],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.ico",
  },
  authors: [{ name: "Ірина Матлаєва" }],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Ірина Матлаєва — психологиня, гештальт-підхід",
    description:
      "Терапія для людей, які хочуть краще розуміти себе, свої реакції та стосунки — і не втрачати себе у швидкому темпі життя.",
    url: siteUrl,
    siteName: "Ірина Матлаєва",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 1500,
        alt: "Ірина Матлаєва — психологиня",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ірина Матлаєва — психологиня, гештальт-терапевтка",
    description:
      "Простір, де можна краще зрозуміти себе і повернути контакт із собою.",
    images: ["/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Psychologist",
  name: "Ірина Матлаєва",
  description:
    "Психологиня, гештальт-терапевтка для людей, які живуть у світі високих вимог, відповідальності та постійного навантаження.",
  url: siteUrl,
  image: `${siteUrl}/hero.jpg`,
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Київ" },
    { "@type": "Country", name: "Україна" },
    { "@type": "Place", name: "Online" },
  ],
  knowsAbout: [
    "Гештальт-терапія",
    "Вигорання",
    "Тривога",
    "Психологічна підтримка",
    "Групова терапія",
    "Стрес",
    "Межі",
    "Самопізнання",
  ],
  memberOf: {
    "@type": "Organization",
    name: "Національна асоціація гештальт-терапевтів України",
    url: "https://nagtu.org.ua",
  },
  sameAs: [
    "https://t.me/Iryna_as",
    "https://www.instagram.com/iryna.matlayeva",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Формати роботи",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Індивідуальна терапія",
          description: "Онлайн або Київ, 50 хвилин",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Психологічна підтримка для компаній",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Групові формати та майстерні",
        },
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
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}

        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YRRPMX7TGF"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-YRRPMX7TGF');
  `}
        </Script>
      </body>
    </html>
  );
}
