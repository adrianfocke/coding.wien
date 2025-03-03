export const isSizeUnit = (value: string) => {
  const regex = /^(|[0-9]+(\.[0-9]+)?(px|vw|%|vh))$/;
  return regex.test(value) ? undefined : "Size must be a valid size unit";
};
