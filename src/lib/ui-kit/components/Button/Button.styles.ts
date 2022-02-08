import { Button } from "@chakra-ui/react";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  && {
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};

    :disabled:hover,
    :hover {
      background: ${({ theme }) => theme.colors.lightBlack};
    }
  }
`;
