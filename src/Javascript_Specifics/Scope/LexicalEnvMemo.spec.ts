import { Counter, CounterFunction } from './LexicalEnvMemo';

describe('Counter', () => {
  it('should return +1 increment from default zero', () => {
    const myCounter: CounterFunction = Counter();
    expect(myCounter()).toBe(1);
    expect(myCounter()).toBe(2);
    expect(myCounter()).toBe(3);
  });

  it('should return +1 increment from 3', () => {
    const myCounter: CounterFunction = Counter(3);
    expect(myCounter()).toBe(4);
    expect(myCounter()).toBe(5);
    expect(myCounter()).toBe(6);
  });
});
