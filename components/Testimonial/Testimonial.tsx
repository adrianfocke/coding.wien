import { Box, Tabs, Text } from "@radix-ui/themes";
import { useState, type ReactElement } from "react";

export default ({ testimonials }: { testimonials: ReactElement[] }) => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(1);

  return (
    <Tabs.Root defaultValue={String(activeTestimonial)}>
      <Tabs.List>
        <Tabs.Trigger value={"1"}>Über mich</Tabs.Trigger>
        <Tabs.Trigger value="2">Projekte</Tabs.Trigger>
      </Tabs.List>

      <Box>
        {testimonials.map((testimonial, i) => (
          <Tabs.Content value={String(i + 1)}>{testimonials[i]}</Tabs.Content>
        ))}
      </Box>
    </Tabs.Root>
  );
};
