import type { ReferencePath, ReferenceRelativePath } from "./components";

export const sanitizeFilenameForURL = (filename: string) =>
  filename
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replaceAll(" ", "-");

export const getReferenceRelativePathFromReferencePath = (
  referncePath?: ReferencePath
) => {
  if (!referncePath) {
    return undefined;
  }
  const match = referncePath.match(/content\/[^\/]+\/([^\/]+\.json)$/);
  return match ? (match[1] as ReferenceRelativePath) : undefined;
};
