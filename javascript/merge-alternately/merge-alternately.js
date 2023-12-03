function mergeAlternately(word1, word2) {
  let result = "";
  for (let i1 = 0, i2 = 0; i1 < word1.length || i2 < word2.length; i1++, i2++) {
    const char1 = i1 < word1.length ? word1[i1] : "";
    const char2 = i2 < word2.length ? word2[i2] : "";
    result += char1 + char2;
  }
  return result;
}

module.exports = {
  mergeAlternately,
};
