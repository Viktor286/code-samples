export function promiseAll(promisesArr: Promise<any>[]): Promise<any[]> {
  return new Promise((resolve, reject) => {
    let requestCnt: number = promisesArr.length;
    const outputCollection: any[] = new Array(requestCnt);

    promisesArr.forEach((p, i) => {
      p.then(
        (res) => {
          outputCollection[i] = res;
          --requestCnt;
          if (requestCnt <= 0) {
            resolve(outputCollection);
          }
        },
        (err) => {
          reject(err);
        },
      );
    });
  });
}
