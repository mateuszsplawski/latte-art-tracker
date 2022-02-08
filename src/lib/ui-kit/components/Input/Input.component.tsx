import {
  Input as ChakraInput,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FieldProps } from "formik";

import { StyledFormControl as FormControl } from "./Input.styles";

interface InputProps extends FieldProps<string> {
  label: string;
  placeholder?: string;
  type?: string;
}

export const Input = ({
  placeholder,
  label,
  type,
  field: { name, ...field },
  meta: { error },
}: InputProps) => {
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={name}>{label}</FormLabel>
      <ChakraInput
        id={name}
        name={name}
        placeholder={placeholder}
        type={type}
        variant="outline"
        {...field}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
