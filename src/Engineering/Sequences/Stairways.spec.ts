import {
  numOfTwoWaysDeclarativeRecursion,
  numOfTwoWaysIterativeMemo,
  numOfWaysRecursion,
  numOfWaysMemo,
} from './Stairways';

const expectedSequenceForTwo: number[] = [1, 1, 2, 3, 5, 8, 13, 21];

describe('numOfTwoWaysDeclarativeRecursion', () => {
  it('should return result according to expectedSequenceForTwo', () => {
    expectedSequenceForTwo.forEach((answer, idx) => {
      expect(numOfTwoWaysDeclarativeRecursion(idx)).toEqual(answer);
    });
  });
});

describe('numOfTwoWaysIterativeMemo', () => {
  it('should return result according to numOfTwoWaysIterativeMemo', () => {
    expectedSequenceForTwo.forEach((answer, idx) => {
      expect(numOfTwoWaysIterativeMemo(idx)).toEqual(answer);
    });
  });
});

describe('numOfWaysRecursion', () => {
  it('should return result according to numOfTwoWaysIterativeMemo', () => {
    const allowedSteps = [1, 2];
    expectedSequenceForTwo.forEach((answer, idx) => {
      expect(numOfWaysRecursion(idx, allowedSteps)).toEqual(answer);
    });
  });
});

describe('numOfWaysMemo', () => {
  it('should return result according to numOfTwoWaysIterativeMemo', () => {
    const allowedSteps = [1, 2];
    expectedSequenceForTwo.forEach((answer, idx) => {
      expect(numOfWaysMemo(idx, allowedSteps)).toEqual(answer);
    });
  });
});
