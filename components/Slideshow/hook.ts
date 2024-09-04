import { useRef, useState } from "react";

export const useSlideshow = (imageWidth: number) => {
  const [displayedImage, setDisplayedImage] = useState<number>(1);
  const slideshow = useRef<HTMLElement>();

  const slideshowContainerWidth = slideshow.current?.scrollWidth;
  const numberOfImages =
    slideshowContainerWidth && slideshowContainerWidth / imageWidth;

  const nextSlide = () => {
    if (slideshowContainerWidth && displayedImage < numberOfImages!) {
      const nextScrollPostion =
        (slideshowContainerWidth / numberOfImages!) * (displayedImage + 1) -
        imageWidth;

      slideshow.current?.scrollTo({
        left: nextScrollPostion,
        behavior: "smooth",
      });
      setDisplayedImage(displayedImage + 1);
    }
  };

  const previousSlide = () => {
    if (slideshowContainerWidth && displayedImage > 1) {
      const nextScrollPostion =
        (slideshowContainerWidth / numberOfImages!) * (displayedImage - 1) -
        imageWidth;

      slideshow.current?.scrollTo({
        left: nextScrollPostion,
        behavior: "smooth",
      });
      setDisplayedImage(displayedImage - 1);
    }
  };

  return { slideshow, nextSlide, previousSlide };
};

export default useSlideshow;
