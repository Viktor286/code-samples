/**
 * @param {number} num
 * sum1(2) == 3 // true
 * sum1(3) == 4 // true
 * sum(1)(2)(3) == 6 // true
 * sum(5)(-1)(2) == 6 // true
 */
function sum(num, currentSum = 0) {
  const newCurrentSum = num + currentSum;
  const func = function(arg) {
    return sum(arg, newCurrentSum);
  };
  func.valueOf = () => newCurrentSum;
  return func;
}
