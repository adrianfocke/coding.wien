import type { RefObject } from "react";
import {
  addAnimationClassToAnimationContainer,
  type Strategy,
} from "../strategy";

export class VisibleInViewportStrategy implements Strategy {
  startAnimation(animationContainer: RefObject<HTMLElement>): void {
    console.log("Starting the animation for viewport!", animationContainer);

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        addAnimationClassToAnimationContainer(animationContainer);
      }

      setInterval(() => {
        observer.unobserve(element);
      }, 2000);
    }, {});

    const element = animationContainer.current!;
    observer.observe(element);

    return;
  }
  endAnimation(animationContainer: RefObject<HTMLElement>): void {
    console.log("Ending the animation for viewport!");
    return;
  }
}
