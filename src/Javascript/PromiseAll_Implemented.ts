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

export function promiseAllExtended(promisesArr: Promise<any>[]): Promise<any[]> {
  return new Promise((resolve, reject) => {
    if (promisesArr.length === 0) {
      resolve([]);
      return;
    }

    const outputCollection: any[] = [];

    promisesArr.forEach((p, i) => {
      if (p instanceof Promise) {
        p.then(
          (res) => {
            outputCollection[i] = res;
            if (outputCollection.length === promisesArr.length) {
              resolve(outputCollection);
            }
          },
          (err) => {
            reject(err);
          },
        );
      } else {
        outputCollection[i] = p;
        if (outputCollection.length === promisesArr.length) {
          resolve(outputCollection);
        }
      }
    });
  });
}
