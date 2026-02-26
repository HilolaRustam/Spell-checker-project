import { checkSpelling } from "./spellchecker.mjs";
import assert from "node:assert";
import test from "node:test";

const dictionary = ["this", "is", "a", "well", "known", "test"];

test("returns empty array when all words are correct", () => {
  const result = checkSpelling("this is a test", dictionary);
  assert.deepEqual(result, []);
});

test("returns one misspelled word when one word is incorrect", () => {
  const result = checkSpelling("this is wrong", dictionary);
  assert.deepEqual(result, ["wrong"]);
});

test("returns multiple misspelled words when more then one word is misspelled", () => {
  const result = checkSpelling("this is wrong bad", dictionary);
  assert.deepEqual(result, ["wrong", "bad"]);
});

test("checkSpelling handles punctuation and capital letter correctly", () => {
  const result = checkSpelling("This, is a test!", dictionary);
  assert.deepEqual(result, []);
});

test("checkSpelling handles hyphens, misspelled words, punctuation and capital letters", () => {
  const result = checkSpelling("Well-known, wrng-word!", dictionary);
  assert.deepEqual(result, ["wrng", "word"]);
});
