import { useEffect } from "react";

const SEOHead = ({
  title,
  description,
  canonical,
  schema,
  ogImage = "https://www.thecodetrend.com/logo.png",
}) => {
  useEffect(() => {
    // 1. Mettre à jour le titre du document
    if (title) {
      document.title = title;
    }

    // Helper pour modifier ou créer une balise meta
    const setMetaTag = (attribute, attrValue, content) => {
      if (!content) return;
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Helper pour modifier ou créer une balise link
    const setLinkTag = (rel, href) => {
      if (!href) return;
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // 2. Meta description & Canonical
    if (description) {
      setMetaTag("name", "description", description);
      setMetaTag("property", "og:description", description);
      setMetaTag("name", "twitter:description", description);
    }

    if (title) {
      setMetaTag("property", "og:title", title);
      setMetaTag("name", "twitter:title", title);
    }

    if (canonical) {
      setLinkTag("canonical", canonical);
      setMetaTag("property", "og:url", canonical);
    }

    if (ogImage) {
      setMetaTag("property", "og:image", ogImage);
      setMetaTag("name", "twitter:image", ogImage);
    }

    // 3. Injection du JSON-LD structuré spécifique à la page
    let scriptElement = document.getElementById("page-schema-jsonld");
    if (schema) {
      if (!scriptElement) {
        scriptElement = document.createElement("script");
        scriptElement.id = "page-schema-jsonld";
        scriptElement.type = "application/ld+json";
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schema);
    }

    return () => {
      // Nettoyage éventuel au démontage
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, [title, description, canonical, schema, ogImage]);

  return null;
};

export default SEOHead;
