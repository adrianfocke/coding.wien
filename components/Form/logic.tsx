import * as Form from "@radix-ui/react-form";
import { InfoCircledIcon } from "@radix-ui/react-icons";
import { Callout, Flex, TextArea, TextField } from "@radix-ui/themes";

const validationHint = (
  validationType: Form.FormMessageProps["match"],
  name?: string
) =>
  `Please provide ${
    validationType === "typeMismatch" ? "valid" : ""
  } ${name?.toLowerCase()}`;

export const FormField = ({
  inputType,
  name,
  validations,
}: {
  inputType: "email" | "text"; // TODO check for types that exist
  name: string;
  validations: Form.FormMessageProps["match"][];
}) => (
  <Form.Field name={name}>
    <Flex
      align={"center"}
      direction={"row"}
      justify={"between"}
      gap={"2"}
      my={"2"}
    >
      <Form.Label>{name}</Form.Label>

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
      {inputType === "email" ? (
        <TextField.Root
          placeholder="Please enter your email"
          type="email"
          required
        ></TextField.Root>
      ) : (
        <TextArea placeholder="Reply to comment…" required />
      )}
    </Form.Control>
  </Form.Field>
);
