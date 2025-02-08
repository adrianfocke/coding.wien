import type { RefObject } from "react";
import type { AnimationProp } from "../../tina/template-fields/animation";
import { ClickStrategy } from "./strategies/Click";
import { VisibleInViewportStrategy } from "./strategies/VisibleInViewport";

export interface Strategy {
  startAnimation(
    animationContainer: RefObject<HTMLElement>,
    animationController?: RefObject<HTMLElement>
  ): void;
  endAnimation(
    animationContainer: RefObject<HTMLElement>,
    animationController?: RefObject<HTMLElement>
  ): void;
}

export const addAnimationClassToAnimationContainer = (
  animationContainer: RefObject<HTMLElement>
) => {
  animationContainer.current?.classList.contains("animate")
    ? animationContainer.current.classList.remove("animate")
    : animationContainer.current?.classList.add("animate");
};

export const animateOnToStrategy: Record<AnimationProp["animateOn"], Strategy> =
  {
    click: new ClickStrategy(),
    "visible-in-viewport": new VisibleInViewportStrategy(),
  };
