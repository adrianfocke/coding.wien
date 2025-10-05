import { use } from "react";
import type { PageBodySlideshowFilter, PageBodyTestimonialFilter } from "../../tina/__generated__/types";
import { LanguageContext } from "../../utils/context/language";
import Slideshow from "../Slideshow/Slideshow";

export default function Testimonial(
  props: PageBodyTestimonialFilter
) {
  const language = use(LanguageContext);

  return (
    <Slideshow {...((props as any)[language] as PageBodySlideshowFilter)} variant="testimonials" />
  );
}
