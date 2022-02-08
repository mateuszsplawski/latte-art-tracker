const BREAKPOINTS = {
  mobile: "min-width:481px",
  tablet: "min-width:769px",
  laptop: "min-width:1025px",
  desktop: "min-width:1201px",
};

export const MEDIA_QUERIES = {
  mobile: `@media (${BREAKPOINTS.mobile}) `,
  tablet: `@media (${BREAKPOINTS.tablet}) `,
  laptop: `@media (${BREAKPOINTS.laptop}) `,
  desktop: `@media (${BREAKPOINTS.desktop}) `,
};
