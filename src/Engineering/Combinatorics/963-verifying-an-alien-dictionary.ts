// 953. Verifying an Alien Dictionary
// https://leetcode.com/problems/verifying-an-alien-dictionary/
// Given a sequence of words written in the alien language,
// and the order of the alphabet, return true if and only if
// the given words are sorted lexicographically in this alien language.

function isAlienSorted(words: string[], order: string) {
  const charToIdx = new Map();
  Array.from(order).forEach((e, i) => charToIdx.set(e, i));

  for (let w = 0; w < words.length - 1; w++) {
    if (!isInOrder(words[w], words[w + 1], charToIdx)) {
      return false;
    }
  }

  return true;
}

function isInOrder(w1: string, w2: string, charToIdx: Map<string, number>) {
  for (let i = 0; i < w1.length; i++) {
    const w1CharIdx = charToIdx.get(w1[i]);
    const w2CharIdx = charToIdx.get(w2[i]);
    if (w1CharIdx !== w2CharIdx) {
      // after w1 char becomes "<" then later chars causes no affect on order
      return w1CharIdx < w2CharIdx;
    }
  }

  return w1.length <= w2.length;
}
