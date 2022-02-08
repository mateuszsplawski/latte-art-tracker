import { Form } from "formik";
import styled from "styled-components";

import { MEDIA_QUERIES } from "lib/ui-kit";

export const StyledDeskWithMacbookImage = styled.img`
  display: none;

  ${MEDIA_QUERIES.tablet} {
    display: block;
    width: 100%;
    object-fit: cover;
  }
`;

export const StyledLeftColumn = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledRegisterForm = styled(Form)`
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;

  ${MEDIA_QUERIES.tablet} {
    display: flex;
    > * {
      max-width: 35rem;
    }
  }
`;
