import type { RefObject } from "react";
import {
  addAnimationClassToAnimationContainer,
  type Strategy,
} from "../strategy";

export class ClickStrategy implements Strategy {
  startAnimation(
    animationContainer: RefObject<HTMLElement>,
    animationController: RefObject<HTMLElement>
  ): void {
    console.log("Starting the animation for click!", animationContainer);

    animationController.current?.addEventListener("click", () => {
      addAnimationClassToAnimationContainer(animationContainer);
    });

    return;
  }
  endAnimation(
    animationContainer: RefObject<HTMLElement>,
    animationController: RefObject<HTMLElement>
  ): void {
    console.log("Ending the animation for click!");

    animationController.current?.removeEventListener("click", () => {});
    return;
  }
}
