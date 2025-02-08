import { useEffect, useRef } from "react";
import type { AnimationProp } from "../../tina/template-fields/animation";
import { animateOnToStrategy } from "./strategy";

export default (animation?: AnimationProp) => {
  const animationContainer = useRef<HTMLElement>(null);
  const animationController = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animationContainer.current || !animation?.animateOn) {
      return;
    }

    const animationStrategy = animateOnToStrategy[animation.animateOn];
    animationStrategy.startAnimation(animationContainer, animationController);

    return () => {
      animationStrategy.endAnimation(animationContainer, animationController);
    };
  }, [animationContainer, animationController, animation]);

  return { animationContainer, animationController };
};
