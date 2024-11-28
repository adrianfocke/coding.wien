import type { Reference } from "react";
import type { ReferencePath, ReferenceRelativePath } from "./components";

/** Regex for letters, numbers, umlaute, blank and hyphen */
export const CHARACTERS_REGEX = /^[A-Za-z0-9äöüÄÖÜß\- ]+$/;
export const CHARACTERS_REGEX_HINT =
  "Allowed values: letters, numbers, umlaute, blank and hyphen";

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
