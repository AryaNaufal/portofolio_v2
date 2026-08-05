export function unescapeHtml(str: string): string {
  return str
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
}

export function cleanHeadingText(text: string): string {
  return unescapeHtml(text)
    .replace(/<[^>]+>/g, "")
    .replace(/[`\*\_]/g, "")
    .trim();
}

export function slugify(text: string): string {
  const cleaned = cleanHeadingText(text);
  return cleaned
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
