import type { MetadataRoute } from "next";
import { siteUrl, solutions } from "@/data/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/solucoes", "/como-atuamos", "/sobre", "/cases", "/insights", "/contato", "/analise-estrategica", "/curso", "/privacidade", "/termos", ...solutions.map((solution) => `/solucoes/${solution.slug}`)];
  return paths.map((path) => ({ url: `${siteUrl}${path}`, lastModified: new Date(), changeFrequency: path === "" ? "weekly" : "monthly", priority: path === "" ? 1 : path.startsWith("/solucoes/") ? 0.8 : 0.6 }));
}