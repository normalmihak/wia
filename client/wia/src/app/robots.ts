import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/**
 * /robots.txt
 * 와일드카드로 전 크롤러를 허용합니다. 네이버 크롤러(Yeti)와
 * 구글봇 모두 여기에 포함됩니다.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
