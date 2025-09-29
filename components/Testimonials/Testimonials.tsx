import { Box, Flex, Heading, IconButton } from "@radix-ui/themes";
import styles from "./Testimonials.module.css";
import useTestimonials from "./hook";
import type { PageBodyTestimonialsFilter } from "../../tina/__generated__/types";
import { use } from "react";
import { LanguageContext } from "../../utils/context/language";
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";

export default function Testimonials(props: PageBodyTestimonialsFilter) {
  const language = use(LanguageContext);

  const { testimonials } = props[language] || {};

  const { currentIndex, goToNext, goToPrev } = useTestimonials(
    (testimonials as []).length,
    Number(props.visibleCount) ?? 3
  );
  const visible = (testimonials as []).slice(
    currentIndex,
    Number(currentIndex) + Number(props.visibleCount)
  );

  return (
    <Box>
      <Flex className={styles.testimonialsContainer}>
        {visible.map((testimonial, i) => (
          <Box key={i} className={styles.testimonial}>
            <Heading>{(testimonial as any).heading}</Heading>
          </Box>
        ))}
      </Flex>
      <div className={styles.controls}>
        <IconButton
          disabled={currentIndex === 0}
          onClick={goToPrev}
          size={"3"}
          className="serif secondaryButton"
          variant={"outline"}
          color={"gray"}
          radius={"full"}
        >
          <ArrowLeftIcon width="18" height="18" />
        </IconButton>

        <IconButton
          onClick={goToNext}
          disabled={
            Number(currentIndex) + Number(props.visibleCount) >=
            (testimonials as any).length
          }
          size={"3"}
          className="serif secondaryButton"
          variant={"outline"}
          color={"gray"}
          radius={"full"}
        >
          <ArrowRightIcon width="18" height="18" />
        </IconButton>
      </div>
    </Box>
  );
}
