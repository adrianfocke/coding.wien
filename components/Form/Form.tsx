import * as RadixForm from "@radix-ui/react-form";
import { Button, Card, Container, Flex, Spinner, Text } from "@radix-ui/themes";
import { sendForm } from "./action";
import { FormField } from "./FormField";
import { useForm } from "./hook";
import type { PageBodyFormFilter } from "../../tina/__generated__/types";
import styles from "./Form.module.css";
import { use } from "react";
import { LanguageContext } from "../../utils/context/language";

export default function Form(props: PageBodyFormFilter) {
  const language = use(LanguageContext);
  const { state, setFormState } = useForm();

  console.log(props);

  return (
    <Container my={"8"} className={`${styles.formContainer}`}>
      <Card className={`cardFullWidth`} variant="ghost">
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
          <FormField
            name={"name"}
            validations={["valueMissing"]}
            text={(props?.[language]?.name as unknown as string) ?? "Your Name"}
            placeholder={
              (props?.[language]?.namePlaceholder as unknown as string) ??
              "Enter your placeholder text..."
            }
          />

          <FormField
            name={"email"}
            validations={["valueMissing", "typeMismatch"]}
            text={
              (props?.[language]?.email as unknown as string) ?? "Your Email"
            }
            placeholder={
              (props?.[language]?.emailPlaceholder as unknown as string) ??
              "Enter your placeholder text..."
            }
          />

          <FormField
            name={"text"}
            validations={["valueMissing"]}
            text={(props?.[language]?.text as unknown as string) ?? "Your Text"}
            placeholder={
              (props?.[language]?.textPlaceholder as unknown as string) ??
              "Enter your placeholder text..."
            }
          />

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
                    `${props?.[language]?.sendButtonText ?? "Senden"}`}
                  {state === "sending" && "Senden"}
                  {state === "sent" && "Gesendet!"}
                  {state === "error" && "Leider gab es einen Fehler!"}
                </Text>
              </Button>
            </Flex>
          </RadixForm.Submit>
        </RadixForm.Root>
      </Card>
    </Container>
  );
}
