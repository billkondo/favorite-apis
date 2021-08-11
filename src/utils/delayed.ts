import sleep from './sleep';

function delayed<T>(promise: Promise<T>, delayInMS = 800): Promise<T> {
  return new Promise(async (resolve, reject) => {
    const values = await Promise.all([
      promise.catch((error: any) => new Error(error)),
      sleep(delayInMS),
    ]);

    const res = values[0];

    if (res instanceof Error) reject(res.error);
    else resolve(res);
  });
}

class Error {
  error: any;

  constructor(error: any) {
    this.error = error;
  }
}

export default delayed;
