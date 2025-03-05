import {
  addAnimationClassToAnimationContainer,
  type AnimationStrategyProps,
  type Strategy,
} from "../strategy";

export class ClickStrategy implements Strategy {
  startAnimation(strategyProps: AnimationStrategyProps): void {
    const { animationContainer, animationController, animation } =
      strategyProps;

    animationController?.current?.addEventListener("click", () => {
      addAnimationClassToAnimationContainer(animation, animationContainer);
    });

    return;
  }
  endAnimation(strategyProps: AnimationStrategyProps): void {
    const { animationController } = strategyProps;

    animationController?.current?.removeEventListener("click", () => {});
    return;
  }
}
