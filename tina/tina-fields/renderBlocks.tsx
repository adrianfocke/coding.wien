import { Flex, Text } from "@radix-ui/themes";
import components from "../components";
import { Component2Icon } from "@radix-ui/react-icons";
import { tinaField } from "tinacms/dist/react";

const findComponentTypeName = (typeName: string) => {
  const componentName = (typeName as any).match(/Blocks([^Blocks]*)$/)[1];
  return componentName;
}
  

export default (block: any, key: number) => {
  if (!block?.__typename) return null;

  const componentName = findComponentTypeName((block as any).__typename);

  const Component = components[componentName];

  if (!Component) return <p key={key}>{componentName}</p>;

  return <Component key={key} {...block} />;
};

export const EditHelper = (props: any) => {
  return (
    <Flex mb={"2"} gap={"1"} align={"center"} data-tina-field={tinaField(props.content ?? props)} style={{width: "fit-content"}}>
      <Component2Icon />
      <Text>{findComponentTypeName(props.__typename!)}</Text>
    </Flex>
  );
};
