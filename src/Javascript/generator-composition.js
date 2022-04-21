// https://javascript.info/generators
// https://github.com/javascript-tutorial/en.javascript.info/blob/master/1-js/12-generators-iterators/1-generators/article.md#generator-composition

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

function* generatePasswordCodes() {
  // The result is the same as if we inlined the code from nested generators:
  // for (let i = 48; i <= 57; i++) yield i;
  // 0..9
  yield* generateSequence(48, 57);

  // A..Z
  yield* generateSequence(65, 90);

  // a..z
  yield* generateSequence(97, 122);


}

let str = "";

for (let code of generatePasswordCodes()) {
  str += String.fromCharCode(code);
}

console.log(str); // 0..9A..Za..z
