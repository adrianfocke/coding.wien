import { useEffect, useRef } from "react";

export const useSlideshow = (slideshowSettings?: {
  numberOfSlides?: number;
  nextSlideTimeout: number;
}) => {
  const slideshow = useRef<HTMLElement>(null);
  const activeSlideRef = useRef<number>(1);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const scrollToSlide = (number: number) => {
    if (!slideshow.current || !slideshow.current?.offsetWidth) return;

    activeSlideRef.current = number;
    slideshow.current.scroll({
      left:
        slideshow.current?.offsetWidth * number -
        slideshow.current?.offsetWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (
      !slideshowSettings?.nextSlideTimeout ||
      !slideshowSettings?.numberOfSlides
    )
      return;

    const scheduleNextSlide = () => {
      timeoutRef.current = setTimeout(() => {
        const nextSlide =
          activeSlideRef.current === slideshowSettings.numberOfSlides
            ? 1
            : activeSlideRef.current + 1;

        scrollToSlide(nextSlide);
        scheduleNextSlide();
      }, slideshowSettings.nextSlideTimeout * 1000);
    };

    scheduleNextSlide();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    slideshowSettings?.nextSlideTimeout,
    slideshowSettings?.numberOfSlides,
    slideshow.current?.offsetWidth,
  ]);

  return {
    slideshow,
    scrollToSlide,
  };
};

export default useSlideshow;
