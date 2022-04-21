export type CounterFactory = (count?: number) => CounterFunction;
export type CounterFunction = () => number;

export const Counter: CounterFactory =
  (count = 0) =>
  (): number =>
    ++count;

// // Produced function can store variables in lexical environment
// const myCounter: CounterFunction = Counter();
// // After myCounter assigned to returned function,
// // "count" variable was created in Counter() scope and kept in memory after execution
// console.log(myCounter()); // 1
// console.log(myCounter()); // 2
// console.log(myCounter()); // 3
