import * as Form from "@radix-ui/react-form";
import { Box, Button, Card, Flex, Spinner, Text } from "@radix-ui/themes";
import type { Responsive } from "@radix-ui/themes/dist/cjs/props/prop-def";
import { FormField } from "./FormField";
import { useForm } from "./hook";

import { sendForm } from "./action";

export default ({ width }: { width: Responsive<string> }) => {
  const { state, setFormState } = useForm();

  return (
    <Flex justify={"center"}>
      <Box width={width} m={"2"}>
        <Card variant="ghost">
          <Form.Root
            onSubmit={async (event) => {
              event.preventDefault();
              setFormState("sending");

              const formData = Object.fromEntries(
                new FormData(event.currentTarget)
              );

              sendForm(formData)
                .then(() => setFormState("sent"))
                .catch(() => setFormState("error"));
            }}
          >
            <Text weight={"medium"}>Kontaktformular</Text>

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

            <Form.Submit asChild>
              <Flex align={"center"} direction={"row"} gap={"2"} my={"2"}>
                <Button mt={"4"} disabled={state !== "idle"}>
                  <Spinner loading={state === "sending"}></Spinner>
                  {state === "idle" && "Senden"}
                  {state === "sending" && "Senden"}
                  {state === "sent" && "Sent!"}
                  {state === "error" && "Error!"}
                </Button>
              </Flex>
            </Form.Submit>
          </Form.Root>
        </Card>
      </Box>
    </Flex>
  );
};
