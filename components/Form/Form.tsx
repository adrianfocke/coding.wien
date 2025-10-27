import * as RadixForm from "@radix-ui/react-form";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Spinner,
  Text,
} from "@radix-ui/themes";
import { sendForm } from "./action";
import { FormField } from "./FormField";
import { useForm } from "./hook";
import type { PageBodyFormFilter } from "../../tina/__generated__/types";
import styles from "./Form.module.css";
import { use } from "react";
import { LanguageContext } from "../../utils/context/language";
import { tinaField } from "tinacms/dist/react";
import { displayTextOrPlaceholder, placeholders } from "../helpers";

export default function Form(props: PageBodyFormFilter) {
  const language = use(LanguageContext);
  const { state, setFormState } = useForm();

  return (
    <Container className={styles.formContainer}>
      {props?.[language]?.heading && (
        <Heading
          size={"8"}
          mb={"4"}
          className={`fontNormal serif`}
          data-tina-field={tinaField(props[language], "heading")}
        >
          {props?.[language]?.heading as any}
        </Heading>
      )}

      <Box>
        <RadixForm.Root
          onSubmit={async (event) => {
            event.preventDefault();
            setFormState("sending");

            const formData = Object.fromEntries(
              new FormData(event.currentTarget)
            ) as {
              name: string;
              email: string;
              text: string;
            };

            sendForm(formData)
              .then(() => setFormState("sent"))
              .catch(() => setFormState("error"));
          }}
        >
          <div data-tina-field={tinaField(props[language], "name")}>
            <FormField
              name={"name"}
              validations={["valueMissing"]}
              text={displayTextOrPlaceholder(
                props?.[language]?.name,
                placeholders.form.name
              )}
              placeholder={displayTextOrPlaceholder(
                props?.[language]?.namePlaceholder,
                placeholders.form.namePlaceholder
              )}
            />
          </div>

          <div data-tina-field={tinaField(props[language], "email")}>
            <FormField
              name={"email"}
              validations={["valueMissing", "typeMismatch"]}
              text={displayTextOrPlaceholder(
                props?.[language]?.email,
                placeholders.form.email
              )}
              placeholder={displayTextOrPlaceholder(
                props?.[language]?.emailPlaceholder,
                placeholders.form.emailPlaceholder
              )}
            />
          </div>

          <div data-tina-field={tinaField(props[language], "text")}>
            <FormField
              name={"text"}
              validations={["valueMissing"]}
              text={displayTextOrPlaceholder(
                props?.[language]?.text,
                placeholders.form.text
              )}
              placeholder={displayTextOrPlaceholder(
                props?.[language]?.textPlaceholder,
                placeholders.form.textPlaceholder
              )}
            />
          </div>

          <RadixForm.Submit asChild>
            <Flex align={"center"} direction={"row"} gap={"2"} my={"2"}>
              <Button
                size={"3"}
                className="serif primaryButton"
                variant={"outline"}
                color={"gray"}
                radius={"full"}
                disabled={state !== "idle"}
              >
                <Text size={"5"}>
                  <Spinner loading={state === "sending"}></Spinner>
                  {state === "idle" &&
                    displayTextOrPlaceholder(
                      props?.[language]?.sendButtonText,
                      placeholders.form.sendButtonText
                    )}
                  {state === "sending" &&
                    placeholders.form.sendButtonTextSending}
                  {state === "sent" && placeholders.form.sendButtonTextSuccess}
                  {state === "error" && placeholders.form.sendButtonTextError}
                </Text>
              </Button>
            </Flex>
          </RadixForm.Submit>
        </RadixForm.Root>
      </Box>
    </Container>
  );
}
