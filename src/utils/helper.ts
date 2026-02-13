export const getDriveImageSrc = (url: string, width = 1000) => {
  if (!url) return "";

  // 1. Regex to extract the ID.
  // It looks for the text specifically between '/d/' and the next '/'
  const idMatch = url.match(/\/d\/([a-zA-Z0-9_-]+)/);

  if (idMatch && idMatch[1]) {
    const fileId = idMatch[1];
    // 2. Return the thumbnail URL
    // 'sz=w1000' tells Google to generate a preview 1000px wide.
    return `https://drive.google.com/thumbnail?id=${fileId}&sz=w${width}`;
  }

  return "";
};

export const injectDriveImages = (html: string) => {
  if (!html) return "";

  // Regex Explanation:
  // \[\[IMAGE:   -> Matches literal "[[IMAGE:"
  // ([^|\]]+)    -> Group 1 (URL): Matches anything EXCEPT a pipe "|" or closing bracket "]"
  // (?:\|(\d+))? -> Non-capturing group for the optional part:
  //    \|        -> Matches literal "|"
  //    (\d+)     -> Group 2 (Width): Matches digits only
  // \]\]         -> Matches literal "]]"

  return html.replace(
    /\[\[IMAGE:([^|\]]+)(?:\|(\d+))?\]\]/g,
    (_, rawUrl, rawWidth) => {
      const url = rawUrl.trim();
      const width = rawWidth ? rawWidth.trim() : null; // Capture width if it exists

      // ✅ If NOT a Google Drive link → use directly
      if (!url.includes("drive.google.com")) {
        // Use provided width, or default to 200
        const finalWidth = width || "200";

        return `<img
        src="${url}"
        alt="PYQ Diagram"
        width="${finalWidth}"
        loading="lazy"
        style="max-width: 100%; height: auto; display: block; margin: 10px 0;"
      />`;
      }

      // ✅ Google Drive link → convert
      // We still fetch a high-res version (1200px) so it looks crisp on Retina screens,
      // but we display it at the width you requested.
      const src = getDriveImageSrc(url, 1200);
      if (!src) return "";

      // Use provided width, or default to 500
      const finalWidth = width || "500";

      return `<img
      src="${src}"
      alt="PYQ Diagram"
      width="${finalWidth}"
      loading="lazy"
      style="max-width: 100%; height: auto; display: block; margin: 10px 0;"
    />`;
    },
  );
};
