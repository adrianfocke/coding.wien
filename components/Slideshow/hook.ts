import { useEffect, useRef } from "react";

export const useSlideshow = (slideshowSettings?: {
  numberOfSlides?: number;
  numberOfSlidesShown?: number;
  nextSlideTimeout: number;
}) => {
  const slideshow = useRef<HTMLElement>(null);
  const activeSlideRef = useRef<number>(1);
  const timeoutRef = useRef<NodeJS.Timeout | undefined>(undefined);

  const nextSlide = () => {
    if (!slideshowSettings?.numberOfSlides) return;

    const next =
      activeSlideRef.current === slideshowSettings.numberOfSlides
        ? 1
        : activeSlideRef.current + 1;

    scrollToSlide(next);
  };

  const scrollToSlide = (number: number) => {
    if (!slideshow.current || !slideshow.current?.offsetWidth) return;

    const numberOfSlidesShown = slideshowSettings?.numberOfSlidesShown || 1;
    const slideWidth = slideshow.current.offsetWidth / numberOfSlidesShown;

    activeSlideRef.current = number;
    slideshow.current.scroll({
      left: slideWidth * number - slideWidth,
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
        nextSlide();
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
    slideshowSettings?.numberOfSlidesShown,
    slideshow.current?.offsetWidth,
  ]);

  return {
    slideshow,
    scrollToSlide,
    nextSlide,
  };
};

export default useSlideshow;
