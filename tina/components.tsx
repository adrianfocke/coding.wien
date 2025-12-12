import type { Components } from "tinacms/dist/rich-text";
import Form from "../components/Form/Form";
import Grid from "../components/Grid/Grid";
import Heading from "../components/Heading/Heading";
import Slideshow from "../components/Slideshow/Slideshow";
import Image from "../components/Image/Image";
import Text from "../components/Text/Text";
import GridTemplate from "../components/Grid/GridTemplate";
import { ImageTemplate } from "../components/Image/ImageTemplate";
import SlideshowTemplate from "../components/Slideshow/SlideshowTemplate";
import HeadingTemplate from "../components/Heading/HeadingTemplate";
import TextTemplate from "../components/Text/TextTemplate";

export const templates = [
  GridTemplate,
  HeadingTemplate,
  TextTemplate,
  ImageTemplate,
  SlideshowTemplate,
];

export default {
  Form: (props: any) => {
    return <Form {...props} />;
  },
  Grid: (props: any) => {
    return <Grid {...props} />;
  },
  Image: (props: any) => {
    return <Image {...props} />;
  },
  Text: (props: any) => {
    return <Text {...props} />;
  },
  Heading: (props: any) => {
    return <Heading {...props} />;
  },
  Slideshow: (props: any) => {
    return <Slideshow {...props} />;
  },
} as Components<{}>;
