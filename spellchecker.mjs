export function cleanWord(word) {
  return word.replace(/[,."?!:;]/g, "");
}
export function splitHyphen(word) {
  return word.split("-");
}
export function isCapitalized(word) {
  return word[0] === word[0]?.toUpperCase();
}

export function checkSpelling(text, dictionary) {
  const misspelled = [];

  const words = text.split(" ");

  for (let word of words) {
    if (!word) continue;
    const cleaned = cleanWord(word);
    const parts = splitHyphen(cleaned);

    for (let part of parts) {
      if (!part) continue;

      if (isCapitalized(part)) continue;

      const lower = part.toLowerCase();

      if (!dictionary.includes(lower)) {
        if (!misspelled.includes(part)) {
          misspelled.push(part);
        }
      }
    }
  }
  return misspelled;
}
