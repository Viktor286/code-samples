// For the N of stairs find number of all possible sequences of steps to climb to the top.
// First version of the problem for 1 or 2 stairs per step
// Example of problem could be found at https://www.youtube.com/watch?v=5o-kdjv7FD0

export function numOfTwoWaysDeclarativeRecursion(n: number): number {
  // base case for situations on last stairs
  if (n < 2) return 1;
  return (
    numOfTwoWaysDeclarativeRecursion(n - 1) +
    numOfTwoWaysDeclarativeRecursion(n - 2)
  );
}

export function numOfTwoWaysIterativeMemo(n: number): number {
  // step number represents position in solution array
  const sols: number[] = [1, 1]; // first two sols for step 0 and 1
  // make steps from next step from 1 (step 2) up to last one
  for (let s = 2; s <= n; s++) {
    // record sol according to combination relationship we found
    sols[s] = sols[s - 1] + sols[s - 2];
  }
  return sols[sols.length - 1];
}
