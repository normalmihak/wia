import type { Metadata, Viewport } from "next";
import { company, searchVerification, siteUrl } from "@/lib/site";
import "./globals.css";

const TITLE = "위아케미칼 | 플라스틱용 기능성 도료 전문 기업";
const DESCRIPTION =
  "위아케미칼은 휴대폰 케이스, 화장품, 가전제품에 적용되는 친환경 기능성 플라스틱 도료를 개발·생산합니다. 조색 정밀도 110%, 로트 안정성 124%, 연간 생산능력 1,200톤.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: TITLE, template: "%s | 위아케미칼" },
  description: DESCRIPTION,
  applicationName: "위아케미칼",
  keywords: [
    "위아케미칼",
    "WIA CHEMICAL",
    "플라스틱 도료",
    "기능성 도료",
    "친환경 도료",
    "폰케이스 도료",
    "휴대폰 케이스 도장",
    "화장품 케이스 도료",
    "가전 도료",
    "우레탄 도료",
    "UV 도료",
    "소프트필 도료",
    "SOFT FEEL",
    "조색",
    "도료 제조",
    "안산 도료",
    "화성 도료 공장",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  publisher: company.name,
  // 전화번호 자동 링크 변환이 레이아웃을 흔드는 것을 막습니다.
  formatDetection: { telephone: false, address: false, email: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: siteUrl,
    siteName: "위아케미칼",
    title: TITLE,
    description: DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "위아케미칼 — 기능성 도료의 혁신",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/og.png"],
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
  verification: {
    ...(searchVerification.google ? { google: searchVerification.google } : {}),
    ...(searchVerification.naver
      ? { other: { "naver-site-verification": searchVerification.naver } }
      : {}),
  },
  category: "manufacturing",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04091a",
};

/** 검색엔진이 회사 정보를 구조적으로 읽도록 하는 schema.org 데이터. */
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: company.name,
  alternateName: [company.nameEn, "위아케미칼", "WIA CHEMICAL"],
  url: siteUrl,
  logo: `${siteUrl}/logo/wia-logo.png`,
  image: `${siteUrl}/og.png`,
  description: DESCRIPTION,
  slogan: company.philosophy,
  email: company.email,
  faxNumber: company.fax,
  foundingDate: "2015-12-10",
  founder: { "@type": "Person", name: company.ceo },
  address: {
    "@type": "PostalAddress",
    streetAddress: "단원구 산단로 325",
    addressLocality: "안산시",
    addressRegion: "경기도",
    addressCountry: "KR",
  },
  location: company.locations.map((loc) => ({
    "@type": "Place",
    name: loc.label,
    address: { "@type": "PostalAddress", streetAddress: loc.address, addressCountry: "KR" },
  })),
  areaServed: { "@type": "Country", name: "대한민국" },
  knowsAbout: [
    "플라스틱용 기능성 도료",
    "조색",
    "SOFT FEEL 도료",
    "UV 경화 도료",
    "우레탄 상도",
    "친환경 도료",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: company.email,
    faxNumber: company.fax,
    areaServed: "KR",
    availableLanguage: ["ko"],
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "위아케미칼",
  description: DESCRIPTION,
  inLanguage: "ko-KR",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
        />
        <a
          href="#main"
          className="sr-only rounded-full bg-white px-5 py-3 font-semibold text-brand-700 focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-100"
        >
          본문으로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  );
}
