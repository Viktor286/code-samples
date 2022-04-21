const State = {
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected'
}

class MyPromise {
  state;
  constructor(executor) {
    const tryCall = cb => MyPromise.try(() => cb(this.value));
    const laterCalls = [];
    const callLater = getMember => callback => new MyPromise(resolve => laterCalls.push(() => resolve(getMember()(callback))))

    const strategy = {
      [State.RESOLVED]: {
        state: State.PENDING,
        then: tryCall
      },
      [State.REJECTED]: {
        state: State.REJECTED,
        then: _ => this
      },
      [State.PENDING]: {
        state: State.PENDING,
        catch: callLater(() => this.catch),
        then: callLater(() => this.then)
      }
    }
    const changeState = state => Object.assign(this, strategy[state]);

    const apply = (value, state) => {
      if (this.state === State.PENDING) {
        this.value = value;
        changeState(state);
        for (const laterCall of laterCalls) {
          laterCall();
        }
      }
    };

    const callback = state => value => {
      if (value instanceof MyPromise && state === State.RESOLVED) {
        value.then(value => apply(value, State.RESOLVED));
        value.catch(value => apply(value, State.REJECTED));
      } else {
        apply(value, state);
      }
    };

    const resolve = callback(State.RESOLVED);
    const reject = callback(State.REJECTED);

    try {
      changeState(State.PENDING);
      executor.apply(this, [resolve, reject]);
    } catch (e) {
      changeState(State.REJECTED);
      reject(e);
    }
  }

  static resolve(value) {
    return new MyPromise((resolve, _) => resolve(value))
  }

  static reject(value) {
    return new MyPromise((_, reject) => reject(value))
  }

  static try(callback) {
    return new MyPromise((resolve) => resolve(callback()));
  }
}


MyPromise.resolve(10)
  .then(v => {
    console.log(`From my promise chain 1 ${v}`)
    return v + 5
  }).then(v => {
  console.log(`From my promise chain 2 ${v}`)
}).then(v => {
  throw new Error('dfsdfds')
})

new MyPromise((res, rej) => setTimeout(() => res(10), 100))
  .then((v) => v * 5)
  .then(v => console.log(v))
