/**
 * Converts a string into a URL-friendly slug.
 * @param {string} text - The input string (e.g., a post title).
 * @returns {string} - The resulting slug.
 */
const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // Remove all non-word characters and hyphens
    .replace(/[\s_-]+/g, '-') // Collapse multiple spaces or hyphens into a single hyphen
    .replace(/^-+|-+$/g, ''); // Trim hyphens from the start and end
};
module.exports = slugify;