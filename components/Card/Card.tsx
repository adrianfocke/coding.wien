import { Box } from "@radix-ui/themes";
import { type Template } from "tinacms";
import Animation, {
  type AnimationProp,
} from "../../tina/template-fields/animation";
import Intl, { type IntlProp } from "../../tina/template-fields/intl";
import Size, { type SizeProp } from "../../tina/template-fields/size";

export const CardTemplate: Template = {
  name: "Card",
  fields: [
    Animation,
    Size,
    Intl([
      {
        name: "person",
        label: "Person",
        type: "object",
        fields: [
          { name: "name", label: "Name", type: "string" },
          { name: "pronouns", label: "Pronouns", type: "string" },
          { name: "profession", label: "Profession", type: "string" },
          { name: "email", label: "Email", type: "string" },
          {
            name: "statement",
            label: "Statement",
            type: "string",
            component: "textarea",
          } as any,
          { name: "portrait", label: "Portrait", type: "image" },
        ],
      },
    ]),
  ],
};

export type CardProps = {
  animation?: AnimationProp;
  content?: IntlProp;
  size?: SizeProp;
};

export default function Card({ animation, content, size }: CardProps) {
  console.log(animation);
  return (
    <Box
      height={{
        initial: size?.["initial"]?.height,
        xs: size?.["xs"]?.height,
        sm: size?.["sm"]?.height,
        md: size?.["md"]?.height,
        lg: size?.["lg"]?.height,
        xl: size?.["xl"]?.height,
      }}
      width={{
        initial: size?.["initial"]?.width,
        xs: size?.["xs"]?.width,
        sm: size?.["sm"]?.width,
        md: size?.["md"]?.width,
        lg: size?.["lg"]?.width,
        xl: size?.["xl"]?.width,
      }}
      style={{ border: "2px solid red" }}
      overflow={"scroll"}
    >
      <p>{content?.["de"]?.person?.name || "name"}</p>
      <p>{content?.["de"]?.person?.pronouns || "pronouns"}</p>
      <p>{content?.["de"]?.person?.profession || "profession"}</p>
      <p>{content?.["de"]?.person?.email || "email"}</p>
      <p>{content?.["de"]?.person?.statement || "statement"}</p>
      <p>{content?.["de"]?.person?.portrait || "portrait"}</p>
    </Box>
  );
}
