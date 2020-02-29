import {
  numOfTwoWaysDeclarativeRecursion,
  numOfTwoWaysIterativeMemo,
} from './Stairways';

const expectedSequenceForTwo: number[] = [1, 1, 2, 3, 5, 8];

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
