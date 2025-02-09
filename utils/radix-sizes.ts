import type { SizeProp } from "../tina/template-fields/size";

export const buildWidth = (size: SizeProp | undefined) => {
    return {
      initial: size?.["initial"]?.width,
      xs: size?.["xs"]?.width,
      sm: size?.["sm"]?.width,
      md: size?.["md"]?.width,
      lg: size?.["lg"]?.width,
      xl: size?.["xl"]?.width,
    };
}

export const buildHeight = (size: SizeProp | undefined) => {
  return {
    initial: size?.["initial"]?.height,
    xs: size?.["xs"]?.height,
    sm: size?.["sm"]?.height,
    md: size?.["md"]?.height,
    lg: size?.["lg"]?.height,
    xl: size?.["xl"]?.height,
  };
};