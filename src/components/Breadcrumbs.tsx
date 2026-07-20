import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { JsonLd } from "@/components/JsonLd";
import { siteUrl } from "@/data/content";

type Crumb = { label: string; href?: string };
export function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonItems: Record<string, unknown>[] = [{ "@type": "ListItem", position: 1, name: "Início", item: siteUrl }];
  items.forEach((item, index) => jsonItems.push({ "@type": "ListItem", position: index + 2, name: item.label, ...(item.href ? { item: `${siteUrl}${item.href}` } : {}) }));
  return <><JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: jsonItems }} /><nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap items-center gap-2 text-xs text-foreground/60"><Link href="/" className="hover:text-primary">Início</Link>{items.map((item) => <span className="flex items-center gap-2" key={item.label}><ChevronRight size={13} />{item.href ? <Link href={item.href} className="hover:text-primary">{item.label}</Link> : <span className="text-foreground/80">{item.label}</span>}</span>)}</nav></>;
}