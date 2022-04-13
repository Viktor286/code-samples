// "reverse-words" from interviewcake
// https://www.interviewcake.com/question/javascript/reverse-words
// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words in place.
// Example: const message =
//               [ 'c', 'a', 'k', 'e', ' ',
//                 'p', 'o', 'u', 'n', 'd', ' ',
//                 's', 't', 'e', 'a', 'l' ];
// Output: 'steal pound cake'
function reverseChars(start: number, end: number, array: string[]): string[] {
  while (start < end) {
    const temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }

  return array;
}

function reverseWords(charsArray: string[]) {
  let reversedArray = reverseChars(0, charsArray.length - 1, charsArray);

  let wordStart = 0;
  for (let i = 0; i <= reversedArray.length; i++) {
    if (reversedArray[i] === ' ' || i >= reversedArray.length) {
      reversedArray = reverseChars(wordStart, i - 1, reversedArray);
      wordStart = i + 1;
    }
  }

  return reversedArray;
}
