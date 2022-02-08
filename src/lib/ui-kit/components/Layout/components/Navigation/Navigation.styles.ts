import styled from "styled-components";
import { MEDIA_QUERIES } from "lib/ui-kit";

export const StyledNavigationWrapper = styled.nav`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 2.5rem;
  z-index: 1;
  position: relative;
  box-shadow: 0 -20px 10px 15px ${({ theme }) => theme.colors.gray};

  ${MEDIA_QUERIES.mobile} {
    height: 3.5rem;
  }
`;
