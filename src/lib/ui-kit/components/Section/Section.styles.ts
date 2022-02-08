import { MEDIA_QUERIES } from "lib/ui-kit";
import styled, { css } from "styled-components";

export const StyledSection = styled.section<{
  shouldNotScroll?: boolean;
}>`
  display: flex;
  width: 100vw;
  overflow-x: hidden;

  ${({ shouldNotScroll }) =>
    shouldNotScroll &&
    css`
      height: calc(100vh - 2.5rem);
      overflow: hidden;

      ${MEDIA_QUERIES.mobile} {
        height: calc(100vh - 3.5rem);
      }
    `}
`;
