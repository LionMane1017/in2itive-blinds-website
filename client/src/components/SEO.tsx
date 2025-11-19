import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  article?: {
    publishedTime?: string;
    author?: string;
    section?: string;
  };
  canonical?: string;
}

export function SEO({ title, description, keywords, ogImage, ogType = "website", article, canonical }: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = `${title} | Wise Media I.T. Consultancy`;

    // Set or update meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute("content", content);
    };

    // Standard meta tags
    setMetaTag("description", description);
    if (keywords) {
      setMetaTag("keywords", keywords);
    }

    // Open Graph tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:type", ogType, true);
    setMetaTag("og:url", window.location.href, true);
    
    if (ogImage) {
      setMetaTag("og:image", ogImage, true);
    }

    // Twitter Card tags
    setMetaTag("twitter:card", "summary_large_image");
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    
    if (ogImage) {
      setMetaTag("twitter:image", ogImage);
    }

    // Article-specific Open Graph tags
    if (article) {
      if (article.publishedTime) {
        setMetaTag("article:published_time", article.publishedTime, true);
      }
      if (article.author) {
        setMetaTag("article:author", article.author, true);
      }
      if (article.section) {
        setMetaTag("article:section", article.section, true);
      }
    }

    // Canonical URL
    let canonicalElement = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalElement) {
      canonicalElement = document.createElement('link');
      canonicalElement.rel = 'canonical';
      document.head.appendChild(canonicalElement);
    }
    canonicalElement.href = canonical || window.location.href;

    // JSON-LD Structured Data for Organization
    const existingOrgScript = document.querySelector('script[data-schema="organization"]');
    if (existingOrgScript) {
      existingOrgScript.remove();
    }

    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Wise Media I.T. Consultancy",
      "url": "https://wisemedia.com",
      "logo": "https://wisemedia.com/logo.png",
      "description": "Professional IT consultancy specializing in infrastructure optimization and cloud cost reduction strategies.",
      "contactPoint": {
        "@type": "ContactPoint",
        "email": "contact@mywisemedia.com",
        "contactType": "Customer Service"
      }
    };

    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.setAttribute('data-schema', 'organization');
    orgScript.textContent = JSON.stringify(organizationSchema);
    document.head.appendChild(orgScript);

    // JSON-LD for Article (if article data provided)
    const existingArticleScript = document.querySelector('script[data-schema="article"]');
    if (existingArticleScript) {
      existingArticleScript.remove();
    }

    if (article && ogType === "article") {
      const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": title,
        "description": description,
        "image": ogImage,
        "datePublished": article.publishedTime,
        "author": {
          "@type": "Organization",
          "name": article.author || "Wise Media I.T. Consultancy"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Wise Media I.T. Consultancy",
          "logo": {
            "@type": "ImageObject",
            "url": "https://wisemedia.com/logo.png"
          }
        }
      };

      const articleScript = document.createElement('script');
      articleScript.type = 'application/ld+json';
      articleScript.setAttribute('data-schema', 'article');
      articleScript.textContent = JSON.stringify(articleSchema);
      document.head.appendChild(articleScript);
    }
  }, [title, description, keywords, ogImage, ogType, article, canonical]);

  return null;
}

export default SEO;
