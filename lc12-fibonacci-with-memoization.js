/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N, memo={}) {  
  if (N <= 0) {
    return 0
  }
  
  if (N === 1) {
    return 1
  }
  
  if (memo[N] === undefined) {
    memo[N] = fib(N-1, memo) + fib(N-2, memo)
  }
  
  return memo[N]
};