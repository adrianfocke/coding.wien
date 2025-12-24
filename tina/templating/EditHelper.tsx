import { Flex, Text } from "@radix-ui/themes";
import { Component2Icon } from "@radix-ui/react-icons";
import { tinaField } from "tinacms/dist/react";
import { findComponentByTypeName } from "./utils";

export default (props: any) => {
  return (
    <Flex
      mb={"2"}
      gap={"1"}
      align={"center"}
      data-tina-field={tinaField(props.content ?? props)}
      style={{ width: "fit-content" }}
    >
      <Component2Icon />
      <Text>{findComponentByTypeName(props.__typename!)}</Text>
    </Flex>
  );
};
