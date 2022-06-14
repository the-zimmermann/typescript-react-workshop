const timeout = (ms: number): Promise<string> =>
  new Promise(resolve =>
    setTimeout(() => {
      resolve("Hello World!");
    }, ms)
  );

const test = () => {
  timeout(1000).then(console.log);
};

/**
 * @todo: Rewrite the following code to use async/await.
 */
