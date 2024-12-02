import * as RadixAccordion from "@radix-ui/react-accordion";
import { Box, ChevronDownIcon, Flex, Text } from "@radix-ui/themes";
import React from "react";
import type { Template } from "tinacms";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import "./styles.css";

export const AccordionTemplate = {
  name: "Accordion",
  label: "Accordion",
  fields: [
    {
      name: "title",
      label: "Accordion title",
      type: "string",
    },
    {
      name: "content",
      label: "Accordion content",
      type: "rich-text",
    },
  ],
} as Template;

export type AccordionProps = {
  title: string;
  content: any;
};

export default function Accordion({ title, content }: AccordionProps) {
  return (
    <Box py={"2"}>
      <RadixAccordion.Root className="AccordionRoot" type="single" collapsible>
        <RadixAccordion.Item className="AccordionItem" value="item-1">
          <Trigger>
            <Flex direction={"row"} align={"center"} gap={"1"}>
              <Text size="4">{title}</Text>
              <ChevronDownIcon className="AccordionChevron" aria-hidden />
            </Flex>
          </Trigger>
          <AccordionContent>
            <TinaMarkdown content={content} />
          </AccordionContent>
        </RadixAccordion.Item>
      </RadixAccordion.Root>
    </Box>
  );
}

const Trigger = React.forwardRef(
  (
    { children }: { children: React.ReactNode },
    forwardedRef: React.ForwardedRef<HTMLButtonElement>
  ) => {
    return (
      <RadixAccordion.Header>
        <RadixAccordion.Trigger
          className={"AccordionTrigger"}
          ref={forwardedRef}
        >
          {children}
        </RadixAccordion.Trigger>
      </RadixAccordion.Header>
    );
  }
);

Trigger.displayName = "Trigger";

const AccordionContent = React.forwardRef(
  (
    { children }: { children: React.ReactNode },
    forwardedRef: React.ForwardedRef<unknown>
  ) => (
    <RadixAccordion.Content
      className={"AccordionContent"}
      ref={forwardedRef as React.LegacyRef<HTMLDivElement> | undefined}
    >
      <div>{children}</div>
    </RadixAccordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";