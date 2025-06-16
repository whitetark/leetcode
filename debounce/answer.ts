//https://leetcode.com/problems/debounce/description/

type F = (...args: string[]) => void;
//My answer
function debounce(fn: F, t: number): F {
  let timer;
  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
}

//Answer after leetcode hint
function debounceLeet(fn: F, t: number): F {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(fn, t, ...args);
  };
}

const log = debounce(console.log, 100);
log('Hello'); // cancelled
log('Hello'); // cancelled
log('Hello'); // Logged at t=100ms
