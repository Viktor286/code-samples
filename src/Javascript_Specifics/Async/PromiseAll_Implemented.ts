export function promiseAll(promisesArr: Promise<any>[]): Promise<any[]> {
  return new Promise((resolve, reject) => {
    let requestCnt: number = promisesArr.length;
    const outputCollection: string[] = [];

    promisesArr.forEach(p => {
      p.then(
        res => {
          outputCollection.push(res);
          --requestCnt;
          if (requestCnt <= 0) {
            resolve(outputCollection);
          }
        },
        err => {
          reject(err);
        },
      );
    });
  });
}
