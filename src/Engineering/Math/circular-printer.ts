// A company has invented a new type of printing technology
// - a circular printer. Moving from any character to any adjacent
// character takes 1 second. t can move in either direction.
// Given a string of letters, what is the minimum time
// needed to print the string?

function getTime(s: string) {
  let steps = 0;
  let prev = 'A';
  for (let i = 0; i < s.length; i++) {
    const current = s[i];
    steps += getShortestPath(c(prev), c(current));
    prev = current;
  }
  return steps;
}

function c(char: string) {
  return char.charCodeAt(0) - ('A'.charCodeAt(0) - 1);
}

function getShortestPath(prev: number, current: number) {
  const cw = Math.abs((current - prev) % 26);
  const ccw = Math.abs((prev + current) % 26);

  // Alternatively
  // const cw = Math.abs(current - prev);
  // const ccw = 26 - cw;

  return Math.min(cw, ccw);
}
// console.log(getTime("ZNMD") === 23);
// console.log(getTime("BZA") === 4);
