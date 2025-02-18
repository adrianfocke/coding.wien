import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { PageBodySlideshowSettingsFilter } from "../../tina/__generated__/types";

export const useSlideshow = (
  slideshowSettings?: PageBodySlideshowSettingsFilter
) => {
  const slideshowContainer = useRef<HTMLElement>(null);
  const slideshow = useRef<HTMLElement>(null);

  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [displayedSlide, setDisplayedSlide] = useState<number>(1);

  useEffect(() => {
    setSlideWidth(slideshowContainer.current?.offsetWidth ?? 0);
  }, []);

  const numberOfImages = useMemo(
    () =>
      slideshow.current
        ? Math.round(slideshow.current.scrollWidth / slideWidth)
        : 0,
    [slideWidth]
  );

  const scrollToPosition = (position: number) => {
    slideshow.current?.scrollTo({
      left: Math.round(position),
      behavior: "smooth",
    });
  };

  const goToSlide = (slideNumber: number) => {
    if (slideNumber < 1 || slideNumber > numberOfImages) {
      return;
    }

    const targetScrollPosition = slideWidth * (slideNumber - 1);
    scrollToPosition(targetScrollPosition);
    setDisplayedSlide(slideNumber);
  };

  const nextSlide = useCallback(() => {
    if (!numberOfImages) {
      return;
    }

    if (displayedSlide < numberOfImages) {
      const nextScrollPosition = slideWidth * displayedSlide;
      scrollToPosition(nextScrollPosition);
      setDisplayedSlide(displayedSlide + 1);
    }

    if (displayedSlide === numberOfImages) {
      scrollToPosition(0);
      setDisplayedSlide(1);
    }
  }, [displayedSlide, numberOfImages, slideWidth]);

  const previousSlide = () => {
    if (displayedSlide > 1) {
      const previousScrollPosition = slideWidth * (displayedSlide - 2);
      scrollToPosition(previousScrollPosition);
      setDisplayedSlide(displayedSlide - 1);
    }
  };

  const handleScroll = useCallback(() => {
    if (slideshow.current) {
      const scrollLeft = slideshow.current.scrollLeft;
      const currentIndex = Math.round(scrollLeft / slideWidth) + 1;

      if (currentIndex !== displayedSlide) {
        setDisplayedSlide(currentIndex);
      }
    }
  }, [displayedSlide, slideWidth]);

  useEffect(() => {
    const currentSlideshow = slideshow.current;
    currentSlideshow?.addEventListener("scroll", handleScroll);

    return () => {
      currentSlideshow?.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideshowSettings?.nextSlideTimeout) {
        nextSlide();
      }
    }, slideshowSettings?.nextSlideTimeout as number);

    return () => clearInterval(interval);
  }, [nextSlide, slideshowSettings?.nextSlideTimeout]);

  return {
    slideshowContainer,
    slideshow,
    goToSlide,
    nextSlide,
    previousSlide,
    isActiveSlide: displayedSlide - 1,
  };
};

export default useSlideshow;
