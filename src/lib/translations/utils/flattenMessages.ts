import { InferType } from "prop-types";
import messages from "lib/translations/translations.json";

// @info: https://stackoverflow.com/questions/45783677/react-intl-accessing-nested-messages

type Messages = InferType<typeof messages>;

export const flattenMessages = (nestedMessages: Messages, prefix = "") => {
  if (nestedMessages === null) {
    return {};
  }
  return Object.keys(nestedMessages).reduce((messages, key) => {
    const value = nestedMessages[key];
    const prefixedKey = prefix ? `${prefix}.${key}` : key;

    if (typeof value === "string") {
      Object.assign(messages, { [prefixedKey]: value });
    } else {
      Object.assign(messages, flattenMessages(value, prefixedKey));
    }

    return messages;
  }, {});
};
