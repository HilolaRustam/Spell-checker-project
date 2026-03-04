Testing – Spell Checker Project

1  How to Run Tests

To run the unit tests for this project:

```bash
npm test

The main function tested is:

checkSpelling(text, dictionary)

Followings are verified:

Correct words are not flagged as misspelled.

Incorrect words are detected correctly.

Capitalized words (proper nouns) are ignored.

Punctuation (, . ? ! : ;) are ignored.

Hyphenated words are split and each part is checked individually.

Duplicate misspelled words are only listed once.

Multiple lines and whitespace are handled properly.
