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
