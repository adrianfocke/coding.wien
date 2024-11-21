import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, Flex, Text } from "@radix-ui/themes";
import React from "react";
import "./styles.css";

export default function Accordion() {
  return (
    <RadixAccordion.Root className="AccordionRoot" type="single" collapsible>
      <RadixAccordion.Item className="AccordionItem" value="item-1">
        <Trigger>
          <Flex direction={"row"} align={"center"} gap={"1"}>
            <Text>Yoga mit Coco</Text>
            <ChevronDownIcon className="AccordionChevron" aria-hidden />
          </Flex>
        </Trigger>
        <AccordionContent>
          <p>TEXT</p>
        </AccordionContent>
      </RadixAccordion.Item>
    </RadixAccordion.Root>
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