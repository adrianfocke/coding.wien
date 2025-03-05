import {
  addAnimationClassToAnimationContainer,
  type AnimationStrategyProps,
  type Strategy,
} from "../strategy";

export class VisibleInViewportStrategy implements Strategy {
  startAnimation(strategyProps: AnimationStrategyProps): void {
    const { animationContainer, animation } = strategyProps;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        addAnimationClassToAnimationContainer(animation, animationContainer);
      }

      setInterval(() => {
        observer.unobserve(element);
      }, 2000);
    }, {});

    const element = animationContainer.current!;
    observer.observe(element);

    return;
  }
  endAnimation(strategyProps: AnimationStrategyProps): void {
    return;
  }
}
