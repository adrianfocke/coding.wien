import * as RadixForm from "@radix-ui/react-form";
import { Box, Button, Card, Flex, Spinner, Text } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import { IntlField, WidthField, type IntlFieldType } from "../../tina/fields";
import { DEFAULT_WIDTH } from "../../utils/constants";
import { sendForm } from "./action";
import { FormField } from "./FormField";
import { useForm } from "./hook";

export const FormTemplate = {
  name: "Form",
  label: "Form",
  fields: [IntlField("title"), WidthField],
};

export type FormProps = {
  title?: IntlFieldType;
  width: Responsive<string>;
};

export default function Form({ title, width = DEFAULT_WIDTH }: FormProps) {
  const { state, setFormState } = useForm();

  return (
    <Box width={width}>
      <Card variant="ghost">
        <RadixForm.Root
          onSubmit={async (event) => {
            event.preventDefault();
            setFormState("sending");

            const formData = Object.fromEntries(
              new FormData(event.currentTarget)
            ) as {
              email: string;
              inquiry: string;
            };

            sendForm(formData)
              .then(() => setFormState("sent"))
              .catch(() => setFormState("error"));
          }}
        >
          {title && <Text weight={"medium"}>{title["de"]}</Text>}
          <FormField
            inputType="email"
            name={"email"}
            validations={["valueMissing", "typeMismatch"]}
          />

          <FormField
            inputType="text"
            name={"inquiry"}
            validations={["valueMissing"]}
          />

          <RadixForm.Submit asChild>
            <Flex align={"center"} direction={"row"} gap={"2"} my={"2"}>
              <Button mt={"4"} disabled={state !== "idle"}>
                <Spinner loading={state === "sending"}></Spinner>
                {state === "idle" && "Senden"}
                {state === "sending" && "Senden"}
                {state === "sent" && "Sent!"}
                {state === "error" && "Error!"}
              </Button>
            </Flex>
          </RadixForm.Submit>
        </RadixForm.Root>
      </Card>
    </Box>
  );
}
