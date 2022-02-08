import { ButtonProps } from "@chakra-ui/react";

import { StyledButton as ChakraButton } from "./Button.styles";

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton width="100%" variant="solid" {...props}>
      {children}
    </ChakraButton>
  );
};
