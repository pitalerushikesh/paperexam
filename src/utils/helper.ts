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

  return html.replace(/\[\[IMAGE:(.*?)\]\]/g, (_, url) => {
    const trimmedUrl = url.trim();

    // ✅ If NOT a Google Drive link → use directly
    if (!trimmedUrl.includes("drive.google.com")) {
      return `<img
        src="${trimmedUrl}"
        alt="PYQ Diagram"
        width="200"
        loading="lazy"
      />`;
    }

    // ✅ Google Drive link → convert
    const src = getDriveImageSrc(trimmedUrl, 1200);
    if (!src) return "";

    return `<img
      src="${src}"
      alt="PYQ Diagram"
      width="500"
      loading="lazy"
    />`;
  });
};
