import { MEDIA_QUERIES } from "lib/ui-kit";
import styled, { css } from "styled-components";

import { SectionProps } from "./Section.component";

export const StyledSection = styled.section<Omit<SectionProps, "className" | "children">>`
  position:relative;
  display: flex;
  flex-direction:column;
  width: 100vw;
  overflow-x: hidden;
  padding: 0 1rem;
  
  ${MEDIA_QUERIES.mobile}{
    padding: 0 2rem;
  }

  > * {
    max-width:35rem;
  }

  ${({ shouldNotScroll }) =>
    shouldNotScroll &&
    css`
      height: 100vh;
      overflow: hidden;
    `}

    ${({ isCentered }) => isCentered && css`
      align-items:center;
      justify-content:center;
  `}
`;
