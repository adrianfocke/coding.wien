import type { RefObject } from "react";
import type { ComponentAnimation } from "../../tina/template-fields/animation";
import { ClickStrategy } from "./strategies/Click";
import { VisibleInViewportStrategy } from "./strategies/VisibleInViewport";

const animationToAnimationCssClass: Record<
  ComponentAnimation["animation"],
  string
> = {
  flip: "animateFlip",
  "grow-in": "animateGrowIn",
  ping: "animatePing",
  "zoom-in-picture": "animateZoomInPicture",
};

export type AnimationStrategyProps = {
  animation: ComponentAnimation["animation"];
  animationContainer: RefObject<HTMLElement>;
  animationController?: RefObject<HTMLElement>;
};

export interface Strategy {
  startAnimation(strategyProps: AnimationStrategyProps): void;
  endAnimation(strategyProps: AnimationStrategyProps): void;
}

export const addAnimationClassToAnimationContainer = (
  animation: ComponentAnimation["animation"],
  animationContainer: RefObject<HTMLElement>
) => {
  const animationClass = animationToAnimationCssClass[animation];

  animationContainer.current?.classList.contains(animationClass)
    ? animationContainer.current.classList.remove(animationClass)
    : animationContainer.current?.classList.add(animationClass);
};

export const animateOnToStrategy: Record<
  ComponentAnimation["animateOn"],
  Strategy
> = {
  click: new ClickStrategy(),
  "visible-in-viewport": new VisibleInViewportStrategy(),
};
