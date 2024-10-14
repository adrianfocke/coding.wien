import * as RadixAccordion from "@radix-ui/react-accordion";
import { ChevronDownIcon, Flex, Text } from "@radix-ui/themes";
import React from "react";
import { DEFAULT_WIDTH } from "../../utils/constants";
import Slideshow from "../Slideshow/Slideshow";
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
          <Slideshow slides={[]} width={DEFAULT_WIDTH} />
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

const AccordionContent = React.forwardRef(
  (
    { children }: { children: React.ReactNode },
    forwardedRef: React.ForwardedRef<unknown>
  ) => (
    <RadixAccordion.Content
      className={"AccordionContent"}
      ref={forwardedRef as any}
    >
      <div>{children}</div>
    </RadixAccordion.Content>
  )
);
