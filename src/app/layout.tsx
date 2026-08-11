import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://wiachemical.com"),
  title: {
    default: "위아케미칼 | 플라스틱용 기능성 도료 전문 기업",
    template: "%s | 위아케미칼",
  },
  description:
    "위아케미칼은 휴대폰 케이스, 화장품, 가전제품에 적용되는 친환경 기능성 플라스틱 도료를 개발·생산합니다. 조색 정밀도 110%, 로트 안정성 124%, 연간 생산능력 1,200톤.",
  keywords: [
    "위아케미칼",
    "플라스틱 도료",
    "기능성 도료",
    "폰케이스 도료",
    "SOFT FEEL",
    "친환경 도료",
    "조색",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "위아케미칼",
    title: "위아케미칼 | 플라스틱용 기능성 도료 전문 기업",
    description:
      "컬러 위에 기능을 더합니다. 휴대폰 케이스·화장품·가전용 친환경 기능성 플라스틱 도료.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#04091a",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
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
