import * as RadixForm from "@radix-ui/react-form";
import { Box, Button, Card, Flex, Spinner } from "@radix-ui/themes";
import type { Template } from "tinacms";
import { sendForm } from "./action";
import { FormField } from "./FormField";
import { useForm } from "./hook";

export const FormTemplate: Template = {
  name: "Form",
  label: "Form",
  fields: [{ name: "test", type: "boolean" }],
};

export type FormProps = {
  test: boolean;
};

export default function Form({ test }: FormProps) {
  const { state, setFormState } = useForm();

  console.log(test);

  return (
    <Box width={{ sm: "80vw", md: "440px" }}>
      <Card style={{ width: "100%" }} variant="ghost">
        <RadixForm.Root
          onSubmit={async (event) => {
            event.preventDefault();
            setFormState("sending");

            const formData = Object.fromEntries(
              new FormData(event.currentTarget)
            ) as {
              name: string;
              email: string;
              anfrage: string;
            };

            sendForm(formData)
              .then(() => setFormState("sent"))
              .catch(() => setFormState("error"));
          }}
        >
          <FormField name={"name"} validations={["valueMissing"]} />

          <FormField
            inputType="email"
            name={"email"}
            validations={["valueMissing", "typeMismatch"]}
          />

          <FormField
            inputType="text"
            name={"anfrage"}
            validations={["valueMissing"]}
          />

          <RadixForm.Submit asChild>
            <Flex align={"center"} direction={"row"} gap={"2"} my={"2"}>
              <Button mt={"4"} disabled={state !== "idle"}>
                <Spinner loading={state === "sending"}></Spinner>
                {state === "idle" && "Senden"}
                {state === "sending" && "Senden"}
                {state === "sent" && "Gesendet!"}
                {state === "error" && "Leider gab es einen Fehler!"}
              </Button>
            </Flex>
          </RadixForm.Submit>
        </RadixForm.Root>
      </Card>
    </Box>
  );
}
