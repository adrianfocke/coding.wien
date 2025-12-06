import * as RadixForm from "@radix-ui/react-form";
import { Button, Spinner, Text, Box, Flex } from "@radix-ui/themes";
import { sendForm, type FormData } from "./action";
import { useForm } from "./hook";
import { tinaField } from "tinacms/dist/react";
import styles from "./Form.module.css";
import { useContext, useCallback } from "react";
import { LanguageContext } from "../../utils/context/language";
import ui from "./ui";

export default function Form(props: any) {
  const { state, setFormState } = useForm();
  const language = useContext(LanguageContext);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setFormState("sending");

      const formData = Object.fromEntries(
        new FormData(event.currentTarget)
      ) as FormData;

      formData.formVariant = "contact";

      sendForm(formData)
        .then(() => setFormState("sent"))
        .catch(() => setFormState("error"));
    },
    [setFormState]
  );

  return (
    <Box>
      {props.variant === "contact" && (
        <RadixForm.Root
          className={styles.FormRoot}
          key={1}
          onSubmit={handleSubmit}
        >
          <Flex direction={"column"} gap={"1"}>
            <RadixForm.Field className={styles.FormField} name="name">
              <Flex direction={"column"} gap={"1"}>
                <Flex justify={"between"}>
                  <RadixForm.Label className={styles.FormLabel}>
                    <Text size={{ initial: "4", md: "5" }}>
                      {ui.nameLabel[language]}
                    </Text>
                  </RadixForm.Label>
                  <RadixForm.Message
                    className={styles.FormMessage}
                    match="valueMissing"
                  >
                    {ui.nameValidationMessage[language]}
                  </RadixForm.Message>
                </Flex>

                <RadixForm.Control asChild>
                  <input
                    placeholder={ui.namePlaceholder[language]}
                    className={styles.Input}
                    type="text"
                    required
                  />
                </RadixForm.Control>
              </Flex>
            </RadixForm.Field>

            <RadixForm.Field className={styles.FormField} name="text">
              <Flex direction={"column"} gap={"1"}>
                <Flex justify={"between"}>
                  <RadixForm.Label className={styles.FormLabel}>
                    <Text size={{ initial: "4", md: "5" }}>
                      {ui.textLabel[language]}
                    </Text>
                  </RadixForm.Label>
                  <RadixForm.Message
                    className={styles.FormMessage}
                    match="valueMissing"
                  >
                    {ui.textValidationMessage[language]}
                  </RadixForm.Message>
                </Flex>
                <RadixForm.Control asChild>
                  <textarea
                    className={styles.Textarea}
                    placeholder={ui.textPlaceholder[language]}
                    required
                  />
                </RadixForm.Control>
              </Flex>
            </RadixForm.Field>

            <RadixForm.Field className={styles.FormField} name="email">
              <Flex direction={"column"} gap={"1"}>
                <Flex justify={"between"}>
                  <RadixForm.Label className={styles.FormLabel}>
                    <Text size={{ initial: "4", md: "5" }}>
                      {ui.emailLabel[language]}
                    </Text>
                  </RadixForm.Label>
                  <RadixForm.Message
                    className={styles.FormMessage}
                    match="valueMissing"
                  >
                    {ui.emailValidationMessage[language]}
                  </RadixForm.Message>
                  <RadixForm.Message
                    className={styles.FormMessage}
                    match="typeMismatch"
                  >
                    {ui.emailValidationMessage[language]}
                  </RadixForm.Message>
                </Flex>
                <RadixForm.Control asChild>
                  <input
                    placeholder={ui.emailPlaceholder[language]}
                    className={styles.Input}
                    type="email"
                    required
                  />
                </RadixForm.Control>
              </Flex>
            </RadixForm.Field>
          </Flex>

          <RadixForm.Submit asChild>
            <Button
              mt={"4"}
              variant={"outline"}
              color={"gray"}
              radius={"full"}
              disabled={state !== "idle"}
            >
              <Text size={"5"}>
                <Spinner loading={state === "sending"}></Spinner>
                {state === "idle" && ui.buttonStateIdle[language]}
                {state === "sending" && ui.buttonStateSending[language]}
                {state === "sent" && ui.buttonStateSent[language]}
                {state === "error" && ui.buttonStateError[language]}
              </Text>
            </Button>
          </RadixForm.Submit>
        </RadixForm.Root>
      )}

      {props.variant === "newsletter" && (
        <RadixForm.Root
          key={1}
          onSubmit={async (event) => {
            event.preventDefault();
            setFormState("sending");

            const formData = Object.fromEntries(
              new FormData(event.currentTarget)
            ) as FormData;

            formData.formVariant = "newsletter";

            sendForm(formData)
              .then(() => setFormState("sent"))
              .catch(() => setFormState("error"));
          }}
        >
          <div data-tina-field={tinaField(props, "email")}>
            <RadixForm.Field name="email">
              <RadixForm.Label className={styles.FormLabel}>
                {ui.emailLabel[language]}
              </RadixForm.Label>
              <RadixForm.Message
                className={styles.FormMessage}
                match="valueMissing"
              >
                {ui.emailValidationMessage[language]}
              </RadixForm.Message>
              <RadixForm.Message
                className={styles.FormMessage}
                match="typeMismatch"
              >
                {ui.emailValidationMessage[language]}
              </RadixForm.Message>
              <RadixForm.Control asChild>
                <input type="email" required />
              </RadixForm.Control>
            </RadixForm.Field>
          </div>

          <RadixForm.Submit asChild>
            <Button
              size={"3"}
              variant={"outline"}
              color={"gray"}
              radius={"full"}
              disabled={state !== "idle"}
            >
              <Text size={"5"}>
                <Spinner loading={state === "sending"}></Spinner>
                {state === "idle" && ui.buttonStateIdle[language]}
                {state === "sending" && ui.buttonStateSending[language]}
                {state === "sent" && ui.buttonStateSent[language]}
                {state === "error" && ui.buttonStateError[language]}
              </Text>
            </Button>
          </RadixForm.Submit>
        </RadixForm.Root>
      )}
    </Box>
  );
}
