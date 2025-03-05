import type { RefObject } from "react";
import type { AnimationProp } from "../../tina/template-fields/animation";
import { ClickStrategy } from "./strategies/Click";
import { VisibleInViewportStrategy } from "./strategies/VisibleInViewport";

const animationToAnimationCssClass: Record<AnimationProp["animation"], string> =
  {
    flip: "animateFlip",
    "grow-in": "animateGrowIn",
    ping: "animatePing",
    "zoom-in-picture": "animateZoomInPicture",
  };

export type AnimationStrategyProps = {
  animation: AnimationProp["animation"];
  animationContainer: RefObject<HTMLElement>;
  animationController?: RefObject<HTMLElement>;
};

export interface Strategy {
  startAnimation(strategyProps: AnimationStrategyProps): void;
  endAnimation(strategyProps: AnimationStrategyProps): void;
}

export const addAnimationClassToAnimationContainer = (
  animation: AnimationProp["animation"],
  animationContainer: RefObject<HTMLElement>
) => {
  const animationClass = animationToAnimationCssClass[animation];

  animationContainer.current?.classList.contains(animationClass)
    ? animationContainer.current.classList.remove(animationClass)
    : animationContainer.current?.classList.add(animationClass);
};

export const animateOnToStrategy: Record<AnimationProp["animateOn"], Strategy> =
  {
    click: new ClickStrategy(),
    "visible-in-viewport": new VisibleInViewportStrategy(),
  };
