import Image from "next/image";
import type { Components } from "tinacms/dist/rich-text";

export const imageComponent: Record<"normal" | "responsive", Components<{}>> = {
  normal: {
    img: (props: { url: string; caption?: string; alt?: string }) => (
      <Image src={props.url ?? ""} alt={""} width={400} height={400} />
    ),
  },
  responsive: {
    img: (props: { url: string; caption?: string; alt?: string }) => (
      <Image
        priority
        src={props.url ?? ""}
        alt={""}
        fill
        quality={100}
        sizes="(min-width: 808px) 100%, 100vh"
        style={{
          zIndex: "-1",
          objectFit: "cover",
        }}
      />
    ),
  },
};