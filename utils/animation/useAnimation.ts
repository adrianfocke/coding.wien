import { useEffect, useRef } from "react";
import type { ComponentAnimation } from "../../tina/template-fields/animation";
import { animateOnToStrategy } from "./strategy";

export default (animation?: ComponentAnimation) => {
  const animationContainer = useRef<HTMLElement>(null);
  const animationController = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animationContainer.current || !animation?.animateOn) {
      return;
    }

    const animationStrategy = animateOnToStrategy[animation.animateOn];
    animationStrategy.startAnimation({
      animation: animation.animation,
      animationContainer: animationContainer,
      animationController: animationController,
    });

    return () => {
      animationStrategy.endAnimation({
        animation: animation.animation,
        animationContainer: animationContainer,
        animationController: animationController,
      });
    };
  }, [animationContainer, animationController, animation]);

  return { animationContainer, animationController };
};
