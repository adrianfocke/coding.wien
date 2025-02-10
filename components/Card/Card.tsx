import { Box, Button } from "@radix-ui/themes";
import type { Ref } from "react";
import { type Template } from "tinacms";
import type { PageBodyCardContentFilter } from "../../tina/__generated__/types";
import type { CustomComponentProps } from "../../tina/types";
import useAnimation from "../../utils/animation/useAnimation";
import { buildHeight, buildWidth } from "../../utils/radix-sizes";
import styles from "./Card.module.css";

export const CardFields: Template["fields"] = [
  {
    name: "card",
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
];

export default function Card({
  animation,
  content,
  size,
}: CustomComponentProps<PageBodyCardContentFilter>) {
  const { animationContainer, animationController } = useAnimation(animation);

  console.log("Card component content: ", content);

  return (
    <Box
      className={styles.box}
      height={buildHeight(size)}
      width={buildWidth(size)}
      style={{ border: "2px solid red" }}
      overflow={"scroll"}
      ref={animationContainer as Ref<HTMLDivElement>}
    >
      <p>{(content?.["de"]?.card?.name as any) || "name"}</p>
      <p>{(content?.["de"]?.card?.pronouns as any) || "pronouns"}</p>
      <p>{(content?.["de"]?.card?.profession as any) || "profession"}</p>
      <p>{(content?.["de"]?.card?.email as any) || "email"}</p>

      <div ref={animationController as Ref<HTMLDivElement>}>
        <Button>Flip me!</Button>
      </div>

      <p>{(content?.["de"]?.card?.statement as any) || "statement"}</p>
      <p>{(content?.["de"]?.card?.portrait as any) || "portrait"}</p>
    </Box>
  );
}
