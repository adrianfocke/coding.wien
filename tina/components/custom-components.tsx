import type { Components } from "tinacms/dist/rich-text";
import Slideshow from "../../components/Slideshow/Slideshow";
import type { CustomComponentProps } from "../types";

export default {
  Slideshow: (props: CustomComponentProps) => {
    return <Slideshow {...props} />;
  },
} as Components<{}>;
