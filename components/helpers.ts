import type { InputMaybe, StringFilter } from "../tina/__generated__/types";

const isEmptyStringOrUndefinded = (
  value: InputMaybe<StringFilter> | undefined
) => {
  if (value === undefined) return true;
  if ((value as unknown as string).trim() === "") return true;
  return false;
};

export const displayTextOrPlaceholder = (
  textFromProp: InputMaybe<StringFilter> | undefined,
  placeholder: string
) => {
  if (isEmptyStringOrUndefinded(textFromProp)) {
    return placeholder;
  }
  return textFromProp as unknown as string;
};
