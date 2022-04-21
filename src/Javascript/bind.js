Function.prototype.bind = function (context) {
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const fn = this;
  return (...arguments) => fn.call(context, ...arguments);
};

function test(b, c) {
  console.log(this.a);
  console.log(b);
  console.log(c);
}

const fn = test.bind({ a: 'Hello ' });

fn(1, 2);
