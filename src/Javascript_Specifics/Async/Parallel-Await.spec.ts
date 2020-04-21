import { parallelAwaitFetchAll, parallelAwaitFetch } from './Parallel-Await';

describe('Parallel Await', () => {
  describe('Parallel Await with promise.all', () => {
    it('should finish before 3 sec', async () => {
      const result = await parallelAwaitFetchAll();
      expect(result.time < 3000).toBe(true);
    });
  });

  describe('Parallel Await with saved Promised request', () => {
    it('should finish before 3 sec', async () => {
      const result = await parallelAwaitFetch();
      expect(result.time < 3000).toBe(true);
    });
  });
});
