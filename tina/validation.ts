export enum Regex {
  "sizeUnit" = "([0-9]+(.[0-9]+)?(px|vw|%|vh))?",
  "radixSizeUnit" = "(-?[0-9])?",
}

export const isSizeUnit = (value: string, regex: Regex) => {
  if (value === undefined) {
    return undefined;
  }

  const regexToUse = new RegExp(`^${regex}$`);
  return regexToUse.test(value) ? undefined : "Size must be a valid size unit";
};
