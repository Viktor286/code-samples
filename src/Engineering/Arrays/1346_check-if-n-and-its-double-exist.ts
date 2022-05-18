// Given an array arr of integers, check if there exists two integers
// N and M such that N is the double of M ( i.e. N = 2 * M; M = N / 2).

function checkIfExist(arr: number[]): boolean {
  const seen = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (seen.has(2 * arr[i]) || (arr[i] % 2 === 0 && seen.has(arr[i] / 2))) {
      return true;
    }
    seen.add(arr[i]);
  }

  return false;
}
