const slugify = require('../../src/utils/slugify');

describe('Slugify Utility Function', () => {
  it('should convert a title into a simple slug', () => {
    const title = "The Quick Brown Fox Jumps";
    expect(slugify(title)).toBe('the-quick-brown-fox-jumps');
  });

  it('should handle special characters and punctuation', () => {
    const title = "Post Title! (with a date: 2023)";
    expect(slugify(title)).toBe('post-title-with-a-date-2023');
  });

  it('should handle empty strings', () => {
    expect(slugify('')).toBe('');
  });

  it('should handle extra whitespace', () => {
    const title = "  A title  with spaces ";
    expect(slugify(title)).toBe('a-title-with-spaces');
  });
});