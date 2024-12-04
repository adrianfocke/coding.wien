import { useEffect, useRef, useState } from "react";

export const useSlideshow = (slideshowSettings?: { timeout?: number }) => {
  const slideshowContainer = useRef<HTMLElement>(null);
  const slideshow = useRef<HTMLElement>(null);

  const [slideWidth, setSlideWidth] = useState<number>(0);
  const [displayedSlide, setDisplayedSlide] = useState<number>(1);

  useEffect(() => {
    setSlideWidth(slideshowContainer.current?.offsetWidth ?? 0);
  }, []);

  const getNumberOfImages = (containerWidth?: number) =>
    containerWidth ? Math.floor(containerWidth / slideWidth) : 0;

  const scrollToPosition = (position: number) => {
    slideshow.current?.scrollTo({
      left: Math.round(position),
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    const containerWidth = slideshow.current?.scrollWidth;
    const numberOfImages = getNumberOfImages(containerWidth);

    if (!containerWidth || !numberOfImages) {
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
  };

  const previousSlide = () => {
    if (displayedSlide > 1) {
      const previousScrollPosition = slideWidth * (displayedSlide - 2);
      scrollToPosition(previousScrollPosition);
      setDisplayedSlide(displayedSlide - 1);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (slideshow.current) {
        const scrollLeft = slideshow.current.scrollLeft;
        const currentIndex = Math.round(scrollLeft / slideWidth) + 1;

        if (currentIndex !== displayedSlide) {
          setDisplayedSlide(currentIndex);
        }
      }
    };

    const currentSlideshow = slideshow.current;
    currentSlideshow?.addEventListener("scroll", handleScroll);

    return () => {
      currentSlideshow?.removeEventListener("scroll", handleScroll);
    };
  }, [displayedSlide, slideWidth]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (slideshowSettings?.timeout) {
        nextSlide();
      }
    }, slideshowSettings!.timeout);

    return () => clearInterval(interval);
  }, [nextSlide, slideshowSettings]);

  return { slideshowContainer, slideshow, nextSlide, previousSlide };
};

export default useSlideshow;
