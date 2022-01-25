// For the N of stairs find number of all possible sequences of steps to climb to the top.
// Example of problem could be found at https://www.youtube.com/watch?v=5o-kdjv7FD0

// ----- First version of the problem for 1 or 2 stairs per step ----- //

export function numOfTwoWaysDeclarativeRecursion(n: number): number {
  // base case for situations on last stairs
  if (n < 2) return 1;
  return numOfTwoWaysDeclarativeRecursion(n - 1) + numOfTwoWaysDeclarativeRecursion(n - 2);
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

// ----- Unified solution for different set of steps ----- //

export function numOfWaysRecursion(n: number, allowedSteps: number[]): number {
  if (n === 0) return 1;
  let intermediateSum = 0;
  allowedSteps.forEach((stepLen) => {
    if (n - stepLen >= 0) {
      intermediateSum += numOfWaysRecursion(n - stepLen, allowedSteps);
    }
  });
  return intermediateSum;
}

export function numOfWaysMemo(n: number, allowedSteps: number[]) {
  const sols = [1];
  for (let step = 1; step <= n; step++) {
    let intermediateSum = 0;
    allowedSteps.forEach((stepLen) => {
      if (step - stepLen >= 0) intermediateSum += sols[step - stepLen];
    });
    sols[step] = intermediateSum;
  }
  return sols[n];
}
