// See: https://leetcode.com/problems/merge-strings-alternately/
const { mergeAlternately } = require('./merge-alternately');

describe('mergeAlternately', () => {
  it('should merge empty strings.', () => {
    const result = mergeAlternately('', '');
    expect(result).toBe('');
  });

  it.each([
    ['', 'a', 'a'],
    ['abc', '', 'abc'],
  ])(
    "should merge one empty & one non-empty string '%s' & '%s'.",
    (s1, s2, expected) => {
      const result = mergeAlternately(s1, s2);
      expect(result).toBe(expected);
    }
  );

  it.each([
    ['a', 'b', 'ab'],
    ['abc', 'pqr', 'apbqcr'],
  ])(
    "should merge strings of equal length '%s' & '%s'.",
    (s1, s2, expected) => {
      const result = mergeAlternately(s1, s2);
      expect(result).toBe(expected);
    }
  );

  it.each([
    ['abcd', 'pq', 'apbqcd'],
    ['ab', 'pqr', 'apbqr'],
  ])(
    "should merge strings of unequal length '%s' & '%s'.",
    (s1, s2, expected) => {
      const result = mergeAlternately(s1, s2);
      expect(result).toBe(expected);
    }
  );
});
