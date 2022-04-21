// Interface and factory for unsigned 8-bit integer based on Uint8Array
// Works in browser and in node.js environments
function createU8BitIntVariable(varName = 'u8BitInt', number = 0) {
  const U8BitDigitObject = new Uint8Array(new ArrayBuffer(1));
  U8BitDigitObject[0] = number;
  Object.defineProperty(this, varName, {
    get() {
      return U8BitDigitObject[0];
    },
    set(x) {
      U8BitDigitObject[0] = x;
    }
  })
}

// Usage example
createU8BitIntVariable('one', 1);
createU8BitIntVariable('two', 2);
console.log("var one, var two, sum:", one, two, one + two);
