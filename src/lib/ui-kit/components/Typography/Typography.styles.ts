import { Link } from "react-router-dom";
import styled from "styled-components";

import { MEDIA_QUERIES } from "lib/ui-kit";

export const StyledH1 = styled.h1`
  font-size:2rem;
  font-weight: bolder;
  
  ${MEDIA_QUERIES.mobile}{
    font-size: 3rem;

  }
`;

export const StyledH2 = styled.h2`
  font-size: 2rem;
`;

export const StyledH3 = styled.h3`
  font-size: 1rem;
`;

export const StyledParagraphSmall = styled.p`
  font-size: 0.75rem;
`;

export const StyledParagraphRegular = styled.p`
  font-size: 1rem;
`;

export const StyledParagraphLarge = styled.p`
  font-size: 1.25rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: underline;
  font-weight: bold;
`;
