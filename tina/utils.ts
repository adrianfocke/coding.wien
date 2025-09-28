export const sanitizeFilenameForURL = (filename: string) =>
  filename
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replaceAll(" ", "-");

export function turnReferenceIntoLink(str: string): string {
  let path = str.replace(/^content\//, "");
  path = path.replace(/\.json$/, "");
  return "/" + path;
}


