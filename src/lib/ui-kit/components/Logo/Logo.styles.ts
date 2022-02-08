import styled from "styled-components";
import { MEDIA_QUERIES } from "lib/ui-kit";

export const StyledLogoWrapper = styled.span`
  font-size: 1rem;

  ${MEDIA_QUERIES.mobile} {
    font-size: 2rem;
  }

  ${MEDIA_QUERIES.tablet} {
    font-size: 2.5rem;
  }
`;
