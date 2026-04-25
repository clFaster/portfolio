import { Helmet } from "react-helmet-async";
import SEO, { siteMetadata } from "../../data/seo";

interface SEOHelmetProps {
  pageName: string;
}

const SEOHelmet = ({ pageName }: SEOHelmetProps) => {
  const helmet = SEO.find((item) => item.page === pageName) || SEO[0];
  const canonicalUrl = new URL(helmet.path, siteMetadata.siteUrl).toString();
  const ogImageUrl = new URL(
    siteMetadata.defaultOgImage,
    siteMetadata.siteUrl,
  ).toString();

  return (
    <Helmet>
      <title>{helmet.title}</title>
      <meta name="description" content={helmet.description} />
      <meta name="keywords" content={helmet.keywords.join(", ")} />
      <meta name="robots" content={helmet.robots ?? "index,follow"} />

      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content={helmet.ogType ?? "website"} />
      <meta property="og:site_name" content={siteMetadata.siteName} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={helmet.title} />
      <meta property="og:description" content={helmet.description} />
      <meta property="og:image" content={ogImageUrl} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={helmet.title} />
      <meta name="twitter:description" content={helmet.description} />
      <meta name="twitter:image" content={ogImageUrl} />
    </Helmet>
  );
};

export default SEOHelmet;
