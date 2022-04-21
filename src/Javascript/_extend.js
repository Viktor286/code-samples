function ParentClass() {
  this.score = 0;
}

ParentClass.prototype.increment = function() {
  return ++this.score;
};
ParentClass.prototype.decrement = function() {
  return --this.score;
};

/**
 * @param {Function} Child  - class which should be extended
 * @param {Function} Parent - class which should be the parent
 * @return {Function}
 */
function _extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype);
  Child.prototype._super = Parent;
  Object.defineProperty(Child.prototype, "constructor", {
    value: Child,
    enumerable: false,
    writable: true
  });
  return Child;
}

const ChildClass = _extend(function ChildClass() {
  this._super();
  this.name = "Eugene";
  this.age = 26;
}, ParentClass);

ChildClass.prototype.toString = function() {
  return `${this.name} ${this.age} ${this.score}`;
};
const ch = new ChildClass();

console.log(ch.toString());
ch.increment();
console.log(ch.toString());
console.log(ch instanceof ParentClass);
console.log(ch instanceof ChildClass);
