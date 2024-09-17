import Image from "next/image";
import type { FormProps } from "../components/Form/Form";
import Form from "../components/Form/Form";
import InstagramPost, {
  type InstagramPostProps,
} from "../components/InstagramPost";

export default {
  Form: ({ title, width }: FormProps) => <Form width={width} title={title} />,
  InstagramPost: ({
    width,
    account,
    description,
    url,
    slides,
  }: InstagramPostProps) => (
    <InstagramPost
      account={account}
      url={url}
      description={description}
      slides={slides.map((slide: any) => (
        <Image
          className="object-fit-cover"
          src={slide.imgSrc}
          alt={slide.altText}
          width={660}
          height={400}
        />
      ))}
      width={width}
    />
  ),
};
