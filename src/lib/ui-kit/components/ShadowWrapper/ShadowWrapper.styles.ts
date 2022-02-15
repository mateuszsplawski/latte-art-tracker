import styled from 'styled-components'

import { MEDIA_QUERIES } from 'lib/ui-kit';

export const StyledShadowWrapper = styled.div`
  box-shadow: 0 0 5px 10px ${({ theme }) => theme.colors.darkWhite};
  background: ${({ theme }) => theme.colors.white};
  padding: 1.5rem;
  border-radius: 2rem;

  ${MEDIA_QUERIES.mobile}{
    padding:2rem;
  }
  `;