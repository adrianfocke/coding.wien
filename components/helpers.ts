import type { InputMaybe, StringFilter } from "../tina/__generated__/types";

// TODO intl
export const placeholders = {
  heading: "Add your captivating heading",
  punchline: "Add your punchline",
  text: "Add your captivating text",
  link: "Add your link",
  image: "/uploads/placeholders/gradient.jpg",
  portraitImage: "/uploads/placeholders/gradient2.jpg",
  form: {
    name: "Your Name",
    email: "Your Email",
    namePlaceholder: "Enter your name...",
    emailPlaceholder: "Enter your email...",
    text: "Your Message",
    textPlaceholder: "Enter your message...",
    sendButtonText: "Send",
    sendButtonTextSending: "Sending...",
    sendButtonTextSuccess: "Sent!",
    sendButtonTextError: "Error!",
    validationHint: "Please check the format of your field",
  },
};

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
