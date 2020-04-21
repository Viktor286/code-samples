import { performance } from 'perf_hooks';

type fetchedSeries = {
  firstFetch: string;
  secondFetch: string;
  thirdFetch: string;
  time: number;
};

const asyncRequest = (request: string): Promise<string> =>
  new Promise(resolve => {
    setTimeout(() => resolve('Successful response for ' + request), 1000);
  });

export async function parallelAwaitFetchAll(): Promise<fetchedSeries> {
  const performanceStarted: number = performance.now();

  const [firstFetch, secondFetch, thirdFetch] = await Promise.all([
    asyncRequest('first request'),
    asyncRequest('second request'),
    asyncRequest('third request'),
  ]);

  return {
    firstFetch,
    secondFetch,
    thirdFetch,
    time: performance.now() - performanceStarted,
  };
}

export async function parallelAwaitFetch(): Promise<fetchedSeries> {
  const performanceStarted: number = performance.now();

  const asyncFirst = asyncRequest('first request');
  const asyncSecond = asyncRequest('second request');
  const asyncThird = asyncRequest('third request');

  return {
    firstFetch: await asyncFirst,
    secondFetch: await asyncSecond,
    thirdFetch: await asyncThird,
    time: performance.now() - performanceStarted,
  };
}
