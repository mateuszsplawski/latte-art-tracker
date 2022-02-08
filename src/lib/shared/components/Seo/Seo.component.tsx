import { Helmet } from "react-helmet";

import { MetaRobotsVariants, SeoMetadata } from "./Seo.types";

const seoDefaultValues = {
  metaTitle: "Book your desk - Deskbook",
  metaDescription: "New solution for desk booking in your office.",
  metaRobots: MetaRobotsVariants.INDEX_FOLLOW,
};

export const Seo = ({
  metaTitle = seoDefaultValues.metaTitle,
  metaDescription = seoDefaultValues.metaDescription,
  metaRobots = seoDefaultValues.metaRobots,
}: SeoMetadata) => {
  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />

      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />

      <meta property="twitter:title" content={metaTitle} />
      <meta property="twitter:description" content={metaDescription} />

      <meta property="facebook:title" content={metaTitle} />
      <meta property="facebook:description" content={metaDescription} />

      <meta name="robots" content={metaRobots} />
    </Helmet>
  );
};
