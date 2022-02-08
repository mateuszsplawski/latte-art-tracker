export interface SeoMetadata {
  metaTitle?: string;
  metaDescription?: string;
  metaRobots?: MetaRobotsVariants;
}

export enum MetaRobotsVariants {
  INDEX_FOLLOW = "index, follow",
  INDEX_NO_FOLLOW = "index, nofollow",
  NO_INDEX_FOLLOW = "noindex, follow",
  NO_INDEX_NO_FOLLOW = "noindex, nofollow",
}
