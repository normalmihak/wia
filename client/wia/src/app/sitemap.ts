import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site";

/** /sitemap.xml — 원페이지 구성이라 정식 URL은 루트 하나뿐입니다. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
