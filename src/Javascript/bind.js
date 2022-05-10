// const myTest = test.bind({}, 'applied args')
Function.prototype.bind = function(ctx, ...bindArgs) {
  return (...args) => this.call(ctx, ...bindArgs, ...args);
}

function test(b, c) {
  console.log(this.a);
  console.log(b);
  console.log(c);
}

const fn = test.bind({ a: 'Hello ' });
const fn2 = test.bind({ a: 'Goodbye ' }, 555);
const fn3 = test.bind({ a: 'Bonjour ' }, 777, 888);

fn(1, 2);
fn2(1, 2);
fn3(1, 2);
