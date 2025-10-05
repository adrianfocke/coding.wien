import intlTemplate from "../../tina/templates/intlTemplate";
import SlideshowTemplate from "../Slideshow/SlideshowTemplate";

export default intlTemplate(
  {
    name: "Testimonial",
    label: "Testimonial",
    type: "object",
    fields: SlideshowTemplate.fields
  },
);
