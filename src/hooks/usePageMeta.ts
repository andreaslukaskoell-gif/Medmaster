import { useEffect } from "react";

type PageMeta = {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
};

function setMetaTag(attr: string, key: string, content: string) {
  let tag = document.querySelector(`meta[${attr}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(href: string) {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.href = href;
}

export function usePageMeta(meta: PageMeta) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = `${meta.title} | MedMaster`;

    setMetaTag("name", "description", meta.description);

    if (meta.canonical) setCanonical(meta.canonical);

    const ogTitle = meta.ogTitle ?? meta.title;
    const ogDesc = meta.ogDescription ?? meta.description;
    setMetaTag("property", "og:title", ogTitle);
    setMetaTag("property", "og:description", ogDesc);
    setMetaTag("property", "og:type", meta.ogType ?? "website");
    if (meta.canonical) setMetaTag("property", "og:url", meta.canonical);
    if (meta.ogImage) setMetaTag("property", "og:image", meta.ogImage);

    setMetaTag("name", "twitter:title", ogTitle);
    setMetaTag("name", "twitter:description", ogDesc);
    if (meta.ogImage) setMetaTag("name", "twitter:image", meta.ogImage);

    return () => {
      document.title = prevTitle;
    };
  }, [
    meta.title,
    meta.description,
    meta.canonical,
    meta.ogTitle,
    meta.ogDescription,
    meta.ogImage,
    meta.ogType,
  ]);
}
