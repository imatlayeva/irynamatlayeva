import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const siteUrl = "https://irynamatlayeva.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ірина Матлаєва — психологиня, гештальт-підхід | Київ, онлайн",
    template: "%s | Ірина Матлаєва",
  },
  description:
  "Ірина Матлаєва — психологиня, гештальт-терапевтка в процесі професійної підготовки. Індивідуальна та парна терапія онлайн і в Києві. Робота із саморозумінням, стосунками, близькістю, кризами, тривогою, виснаженням та складними любовними сценаріями.",
  authors: [{ name: "Ірина Матлаєва" }],

  creator: "Ірина Матлаєва",
  publisher: "Ірина Матлаєва",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        sizes: "any",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: siteUrl,
    siteName: "Ірина Матлаєва",
    title: "Ірина Матлаєва — психологиня, гештальт-підхід | Київ, онлайн",
    description:
      "Індивідуальна та парна терапія онлайн і в Києві. Про саморозуміння, стосунки, близькість, кризи та життя у світі високих вимог.",
    images: [
      {
        url: "/hero.jpg",
        width: 1200,
        height: 1500,
        alt: "Ірина Матлаєва — психологиня, гештальт-підхід",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ірина Матлаєва — психологиня, гештальт-підхід | Київ, онлайн",
    description: "Індивідуальна та парна терапія онлайн і в Києві.",
    images: ["/hero.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Psychologist",
      "@id": `${siteUrl}/#psychologist`,

      name: "Ірина Матлаєва",

      url: siteUrl,

      jobTitle: "Психологиня, гештальт-підхід",

      description:
        "Психологиня, гештальт-підхід. Працює індивідуально та з парами онлайн і в Києві. Професійні теми роботи включають саморозуміння, стосунки, близькість, межі, тривогу, виснаження, перфекціонізм, контроль та складні любовні сценарії.",

      image: `${siteUrl}/hero.jpg`,
      priceRange: "$$",
      areaServed: [
        { "@type": "City", name: "Київ" },
        { "@type": "Country", name: "Україна" },
        { "@type": "Place", name: "Online" },
      ],
      knowsAbout: [
          // Підхід і формат роботи
          "Гештальт-терапія",
          "Гештальт-підхід",
          "Індивідуальна психотерапія",
          "Парна терапія",
          "Терапія для пар",
          "Психологічна підтримка",

          // Саморозуміння і внутрішні процеси
          "Самопізнання",
          "Саморозуміння",
          "Контакт із собою",
          "Емоційна регуляція",
          "Тривога",
          "Тривожність",
          "Стрес",
          "Емоційне виснаження",
          "Вигорання",
          "Психосоматика",
          "Перфекціонізм",
          "Самооцінка",
          "Внутрішній критик",
          "Контроль",
          "Прокрастинація",
          "Сепарація",
          "Особисті межі",
          "Межі",

          // Стосунки
          "Стосунки",
          "Емоційна близькість",
          "Межі у стосунках",
          "Конфлікти у стосунках",
          "Кризи у стосунках",
          "Складні стосунки",
          "Залежні стосунки",
          "Співзалежні стосунки",
          "Емоційна залежність",
          "Емоційно недоступні стосунки",
          "Повторювані сценарії у стосунках",

          // Зрада і любовні трикутники
          "Зрада у стосунках",
          "Переживання зради",
          "Відновлення після зради",
          "Криза після зради",
          "Любовні трикутники",
          "Складні любовні стосунки",
          "Трикутники у стосунках",
          "Стосунки з одруженим партнером",
    
          // Пара
          "Подружні стосунки",
          "Криза у парі",
          "Криза подружніх стосунків",
          "Проблеми у стосунках",
          "Втрата близькості у парі",
          "Конфлікти у парі",

          // Робота і високий темп життя
          "Психологічна підтримка IT-фахівців",
          "Психологічна підтримка програмістів",
          "Психологічна підтримка розробників",
          "Психологічна підтримка керівників",
          "Психологічна підтримка людей із високим рівнем відповідальності",
          "Баланс роботи та життя",
          "Межі між роботою та особистим життям",
          "Вигорання у професійній діяльності",
      ],

      // memberOf: {
      //   "@type": "Organization",
      //   name: "Національна асоціація гештальт-терапевтів України",
      //   url: "https://nagtu.org.ua",
      // },
      
      sameAs: [
        "https://www.instagram.com/iryna.matlayeva",
        "https://t.me/Iryna_as",
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
              serviceType: "Індивідуальна психологічна терапія",
              description:
                "Індивідуальна робота онлайн та в Києві з саморозумінням, емоційними станами, стосунками, кризами та життєвими змінами.",
            },
          },

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Терапія для пар",
              serviceType: "Парна терапія",
              description:
                "Робота зі стосунками, близькістю, конфліктами, кризами, межами та складними періодами у житті пари.",
            },
          },
           {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Психологічна робота зі складними стосунками",
              serviceType: "Індивідуальна психологічна терапія",
              description:
                "Індивідуальна робота зі складними любовними сценаріями, переживанням зради, любовними трикутниками, залежними та співзалежними стосунками, емоційною недоступністю та повторюваними сценаріями у стосунках.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Психологічна підтримка для компаній",
              serviceType: "Психологічна підтримка працівників",
            },
          },

          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Групові формати",
              serviceType: "Групова психологічна робота",
            },
          },
        ],
      },
    },
    {
      "@type": "WebPage",
      "@id": `${siteUrl}/#webpage`,

      url: siteUrl,

      name: "Ірина Матлаєва — психологиня, гештальт-підхід | Київ, онлайн",

      description:
        "Сайт психологині Ірини Матлаєвої. Індивідуальна та парна терапія онлайн і в Києві.",

      inLanguage: "uk-UA",

      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },

      about: {
        "@id": `${siteUrl}/#psychologist`,
      },

      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${siteUrl}/hero.jpg`,
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ірина Матлаєва",
      description: "Сайт психологині Ірини Матлаєвої.",
      inLanguage: "uk-UA",
      publisher: {
        "@id": `${siteUrl}/#psychologist`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </head>

      <body>
        {children}

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
