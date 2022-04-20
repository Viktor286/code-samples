import { promiseAll } from './PromiseAll_Implemented';

type StrResolver = (str: string) => Promise<string>;

const fetchDogs: StrResolver = (name) => Promise.resolve(name);
const fetchCats: StrResolver = (name) => Promise.resolve(name);
const fetchBirds: StrResolver = (name) => new Promise((resolve) => setTimeout(() => resolve(name), 1000));

describe('promiseAll', () => {
  it('should return certain array', () => {
    promiseAll([fetchDogs('Spike'), fetchCats('Fluffy'), fetchBirds('Tweety')]).then((namesArr) => {
      expect(namesArr[0]).toBe('Spike');
      expect(namesArr[1]).toBe('Fluffy');
      expect(namesArr[2]).toBe('Tweety');
    });
  });
});
