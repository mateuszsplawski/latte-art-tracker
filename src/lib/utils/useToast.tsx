import { useToast as useChakraToast, UseToastOptions } from "@chakra-ui/react";

import { useTranslations } from "lib/translations";

const defaultVariant = "left-accent";
const defaultPosition = "top-right";
const defaultIsClosable = true;

export const useToast = () => {
  const toast = useChakraToast();
  const t = useTranslations();

  const templateToast = (props: UseToastOptions) =>
    toast({
      variant: defaultVariant,
      position: defaultPosition,
      isClosable: defaultIsClosable,
      ...props,
    });

  return {
    successToast: (message: string) =>
      templateToast({
        description: message,
        status: "success",
        title: t("toastMessages.successTitle"),
      }),
    infoToast: (message: string) =>
      templateToast({
        description: message,
        status: "info",
        title: t("toastMessages.infoTitle"),
      }),
    errorToast: (message: string) =>
      templateToast({
        description: message,
        status: "error",
        title: t("toastMessages.errorTitle"),
      }),
    warningToast: (message: string) =>
      templateToast({
        description: message,
        status: "warning",
        title: t("toastMessages.warningTitle"),
      }),
  };
};
