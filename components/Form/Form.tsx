import * as Form from "@radix-ui/react-form";
import { Box, Button, Card, Flex, Spinner, Text } from "@radix-ui/themes";
import { useState } from "react";
import { FormField } from "./logic";

export default () => {
  const [state, setState] = useState<"idle" | "sending" | "sent">("idle");

  return (
    <Box maxWidth={{ md: "90vw", lg: "350px" }}>
      <Card variant={"ghost"}>
        <Form.Root
          onSubmit={async (event) => {
            event.preventDefault();
            setState("sending");

            const formData = Object.fromEntries(
              new FormData(event.currentTarget)
            );

            setTimeout(() => {
              setState("sent");
            }, 1000);

            console.log("Form data: ", formData);
          }}
        >
          <Text weight={"medium"}>Get in touch</Text>

          <FormField
            inputType="email"
            name={"Email"}
            validations={["valueMissing", "typeMismatch"]}
          />

          <FormField
            inputType="text"
            name={"Inquiry"}
            validations={["valueMissing"]}
          />

          <Form.Submit asChild>
            <Flex align={"center"} direction={"row"} gap={"2"} my={"2"}>
              <Button mt={"4"} disabled={state === "sending"}>
                <Spinner loading={state === "sending"}></Spinner>
                {state !== "sent" ? "Send" : "Successfully sent"}
              </Button>
            </Flex>
          </Form.Submit>
        </Form.Root>
      </Card>
    </Box>
  );
};
