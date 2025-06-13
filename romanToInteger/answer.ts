// https://leetcode.com/problems/roman-to-integer/description/

// First version
function romanToIntBloated(s: string): number {
  const sArr = s.split('');

  const romanHash = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let result = 0;
  let prevValue = 0;
  sArr.forEach((char, index) => {
    const value = romanHash.get(char) || 0;

    if (prevValue === 0 && index !== sArr.length - 1) {
      prevValue = value;
      return;
    }

    if (prevValue >= value) {
      result += prevValue;
      prevValue = value;
    } else if (prevValue < value) {
      prevValue = value - prevValue;
    }

    if (index === sArr.length - 1) {
      if (prevValue !== 0) {
        result += prevValue;
      } else {
        result += value;
      }
    }
  });

  return result;
}

// Second simplified version before submit
function romanToInt(s: string): number {
  const romanHash = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  let result = 0;
  let prevValue = 0;

  for (const char of s) {
    let value = romanHash.get(char)!;

    // If the previous value was smaller, it was added already — subtract it twice
    if (prevValue < value) {
      value = value - prevValue * 2;
    }

    prevValue = value;
    result += value;
  }

  return result;
}

console.log(romanToInt('MCMXCIV'));
