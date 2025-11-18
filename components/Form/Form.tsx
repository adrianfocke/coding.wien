import * as RadixForm from "@radix-ui/react-form";
import { Button, Spinner, Text } from "@radix-ui/themes";
import { sendForm } from "./action";
import { useForm } from "./hook";

export default function Form(props: any) {
  const { state, setFormState } = useForm();

  console.log("Form props:", props);

  return (
    <>
      {/* <RadixForm.Root
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
        <div data-tina-field={tinaField(props, "name")}>
          <FormField
            name={"name"}
            validations={["valueMissing"]}
            text={"AAA"}
            placeholder={"AAA"}
          />
        </div>

        <div data-tina-field={tinaField(props, "email")}>
          <FormField
            name={"email"}
            validations={["valueMissing", "typeMismatch"]}
            text={"AAA"}
            placeholder={"AAA"}
          />
        </div>

        <div data-tina-field={tinaField(props, "text")}>
          <FormField
            name={"text"}
            validations={["valueMissing"]}
            text={"AAA"}
            placeholder={"AAA"}
          />
        </div>

        <RadixForm.Submit asChild>
          <Flex align={"center"} direction={"row"} gap={"2"} my={"2"}>
            <Button
              size={"3"}
              variant={"outline"}
              color={"gray"}
              radius={"full"}
              disabled={state !== "idle"}
            >
              <Text size={"5"}>
                <Spinner loading={state === "sending"}></Spinner>
                {state === "idle" && "IDLE"}
                {state === "sending" && "SENDING"}
                {state === "sent" && "SENT"}
                {state === "error" && "ERROR"}
              </Text>
            </Button>
          </Flex>
        </RadixForm.Submit>
      </RadixForm.Root> */}

      <RadixForm.Root
        className="FormRoot"
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
        <RadixForm.Field className="FormField" name="email">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <RadixForm.Label className="FormLabel">Email</RadixForm.Label>
            <RadixForm.Message className="FormMessage" match="valueMissing">
              Please enter your email
            </RadixForm.Message>
            <RadixForm.Message className="FormMessage" match="typeMismatch">
              Please provide a valid email
            </RadixForm.Message>
          </div>
          <RadixForm.Control asChild>
            <input className="Input" type="email" required />
          </RadixForm.Control>
        </RadixForm.Field>
        <RadixForm.Field className="FormField" name="question">
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <RadixForm.Label className="FormLabel">Question</RadixForm.Label>
            <RadixForm.Message className="FormMessage" match="valueMissing">
              Please enter a question
            </RadixForm.Message>
          </div>
          <RadixForm.Control asChild>
            <textarea className="Textarea" required />
          </RadixForm.Control>
        </RadixForm.Field>
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
              {state === "idle" && "IDLE"}
              {state === "sending" && "SENDING"}
              {state === "sent" && "SENT"}
              {state === "error" && "ERROR"}
            </Text>
          </Button>
        </RadixForm.Submit>
      </RadixForm.Root>
    </>
  );
}
