import * as Form from "@radix-ui/react-form";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Flex, TextArea, TextField } from "@radix-ui/themes";

const validationHint = (
  validationType: Form.FormMessageProps["match"],
  name?: string
) => `Bitte prüfen Sie das Format Ihres Felds: ${name}`;

export const FormField = ({
  name,
  validations,
  placeholder,
  text,
}: {
  name: "email" | "text" | "name";
  validations: Form.FormMessageProps["match"][];
  placeholder?: string;
  text?: string;
}) => (
  <Form.Field name={name}>
    <Flex
      align={"center"}
      direction={"row"}
      justify={"between"}
      gap={"2"}
      my={"2"}
    >
      <Form.Label>{text}</Form.Label>

      {validations.map((validationType: Form.FormMessageProps["match"]) => (
        <Form.Message key={`${validationType}`} match={validationType}>
          <Callout.Root size={"1"} variant={"outline"}>
            <Callout.Icon>
              <InfoCircledIcon />
            </Callout.Icon>
            <Callout.Text>{validationHint(validationType, name)}</Callout.Text>
          </Callout.Root>
        </Form.Message>
      ))}
    </Flex>

    <Form.Control asChild>
      {name === "email" ? (
        <TextField.Root
          placeholder={placeholder}
          type="email"
          required
        ></TextField.Root>
      ) : name === "text" ? (
        <TextArea placeholder={placeholder} required />
      ) : (
        <TextField.Root placeholder={placeholder} required />
      )}
    </Form.Control>
  </Form.Field>
);
