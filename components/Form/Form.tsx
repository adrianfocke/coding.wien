import * as Form from "@radix-ui/react-form";
import { Box, Button, Card, Flex, Spinner, Text } from "@radix-ui/themes";
import { FormField } from "./FormField";
import { useForm } from "./hook";

export default () => {
  const { state, setFormState } = useForm();

  return (
    <Box maxWidth={{ md: "90vw", lg: "350px" }} m={"2"}>
      <Card variant="ghost">
        <Form.Root
          onSubmit={async (event) => {
            event.preventDefault();
            setFormState("sending");

            const formData = Object.fromEntries(
              new FormData(event.currentTarget)
            );

            setTimeout(() => {
              setFormState("sent");
            }, 1000);

            console.log("Form data: ", formData);
          }}
        >
          <Text weight={"medium"}>Kontaktformular</Text>

          <FormField
            inputType="email"
            name={"Email"}
            validations={["valueMissing", "typeMismatch"]}
          />

          <FormField
            inputType="text"
            name={"Anfrage"}
            validations={["valueMissing"]}
          />

          <Form.Submit asChild>
            <Flex align={"center"} direction={"row"} gap={"2"} my={"2"}>
              <Button mt={"4"} disabled={state === "sending"}>
                <Spinner loading={state === "sending"}></Spinner>
                {state !== "sent" ? "Senden" : "Erfolgreich gesendet!"}
              </Button>
            </Flex>
          </Form.Submit>
        </Form.Root>
      </Card>
    </Box>
  );
};
