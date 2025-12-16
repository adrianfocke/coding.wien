import components from "../components";

export const findComponentByTypeName = (typeName: string) => {
  console.log("typeName", typeName);
  // TODO: remove special case and support PageBlocksSlideshow
  if (typeName === "PageBlocksSlideshow") return "Slideshow";
  if (
    typeName === "PageBlocksButton" ||
    typeName === "PageBlocksGridContentItemsBlocksButton" ||
    typeName === "PageBlocksSlideshowContentBlocksImageContentBlocksButton"
  )
    return "Button";
  if (typeName === "Footer") return "Footer";

  const componentName =
    (typeName as any).match(/Blocks([^Blocks]*)$/)[1] ?? "Grid";
  return componentName;
};

export const renderBlocks = (block: any, key: number) => {
  if (!block?.__typename) return null;

  const componentName = findComponentByTypeName((block as any).__typename);
  const Component = components[componentName];

  if (!Component) return <p key={key}>{componentName}</p>;

  return <Component key={key} {...block} />;
};
