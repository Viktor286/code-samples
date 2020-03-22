import { promiseAll } from './PromiseAll_Implemented';

type StrResolver = (str: string) => Promise<string>;

const fetchDogs: StrResolver = name => Promise.resolve(name);
const fetchCats: StrResolver = name => Promise.resolve(name);
const fetchBirds: StrResolver = name =>
  new Promise(resolve => setTimeout(() => resolve(name), 1000));

describe('promiseAll', () => {
  it('should return certain array', () => {
    promiseAll([
      fetchDogs('Spike'),
      fetchCats('Fluffy'),
      fetchBirds('Tweety'),
    ]).then(namesArr => {
      expect(namesArr).toContain('Spike');
      expect(namesArr).toContain('Fluffy');
      expect(namesArr).toContain('Tweety');
    });
  });
});
