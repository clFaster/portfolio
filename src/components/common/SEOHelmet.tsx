import { Helmet } from "react-helmet-async";
import DATA from "../../data/data";
import SEO from "../../data/seo";

interface SEOHelmetProps {
  pageName: string;
}

const SEOHelmet = ({ pageName }: SEOHelmetProps) => {
  const helmet = SEO.find((item) => item.page === pageName) || SEO[0];

  return (
    <Helmet>
      <title>{DATA.main.title}</title>
      <meta name="description" content={helmet.description} />
      <meta name="keywords" content={helmet.keywords.join(", ")} />
    </Helmet>
  );
};

export default SEOHelmet;
