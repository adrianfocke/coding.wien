import { useState } from "react";

type FormState = "idle" | "sending" | "sent" | "error";

export const useForm = () => {
  const [state, setState] = useState<FormState>("idle");

  const setFormState = (string: FormState) => {
    setState(string);
  };

  return { state, setFormState };
};
