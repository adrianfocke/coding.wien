import { useState } from "react";

export default function useTestimonials(total: number, visible: number) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    setCurrentIndex((i) => Math.min(i + visible, total - visible));
  }
  const goToPrev = () => {
    setCurrentIndex((i) => Math.max(i - visible, 0));
  }
  return { currentIndex, goToNext, goToPrev };
}
