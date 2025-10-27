import * as Form from "@radix-ui/react-form";
import { Flex, TextArea, TextField, Text } from "@radix-ui/themes";
import { placeholders } from "../helpers";

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
          <Text color={"gray"}>{placeholders.form.validationHint}</Text>
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
