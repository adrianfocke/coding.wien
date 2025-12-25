import components from "../components";

export const findComponentByTypeName = (typeName: string) => {
  const componentName =
    (typeName as any).match(/([A-Z]+[a-z]*)$/)?.[1] ?? undefined;

  if (!componentName) {
    console.warn(
      `Could not extract component name from typename ${typeName}: ${componentName}`
    );
    return undefined;
  }

  return componentName;
};

export const renderBlocks = (block: any, key: number) => {
  if (!block?.__typename) return null;

  const componentName = findComponentByTypeName((block as any).__typename);
  const Component = components[componentName];

  if (!Component) return <p key={key}>{componentName}</p>;

  return <Component key={key} {...block} />;
};

export const radixSizeMinusOne = (radixSize: string | undefined | null) => {
  return Number(radixSize) && Number(radixSize) > 1
    ? String(Number(radixSize) - 1)
    : radixSize;
};
