import { useEffect, useRef, useState } from "react";

export const useSlideshow = (slideshowSettings?: {
  numberOfSlides?: number;
  numberOfSlidesShown?: number;
  nextSlideTimeout: number | null;
}) => {
  const slideshow = useRef<HTMLElement>(null);
  const activeSlideRef = useRef<number>(1);
  const [activeSlide, setActiveSlide] = useState<number>(1);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const scrollToSlide = (number: number) => {
    if (!slideshow.current || !slideshow.current?.offsetWidth) return;

    const numberOfSlidesShown = slideshowSettings?.numberOfSlidesShown || 1;
    const slideWidth = slideshow.current.offsetWidth / numberOfSlidesShown;

    activeSlideRef.current = number;
    setActiveSlide(number);
    slideshow.current.scroll({
      left: slideWidth * number - slideWidth,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (!slideshowSettings?.nextSlideTimeout) return;

    const scheduleNextSlide = () => {
      timeoutRef.current = setTimeout(() => {
        const nextSlide =
          activeSlideRef.current === slideshowSettings.numberOfSlides
            ? 1
            : activeSlideRef.current + 1;

        scrollToSlide(nextSlide);
        scheduleNextSlide();
      }, (slideshowSettings.nextSlideTimeout ?? 0) * 1000);
    };

    scheduleNextSlide();

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    slideshowSettings?.nextSlideTimeout,
    slideshowSettings?.numberOfSlides,
    slideshowSettings?.numberOfSlidesShown,
    slideshow.current?.offsetWidth,
  ]);

  return {
    slideshow,
    scrollToSlide,
    activeSlideRef,
    activeSlide,
  };
};

export default useSlideshow;
