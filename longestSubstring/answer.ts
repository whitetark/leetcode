// https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

// My first answer
function lengthOfLongestSubstring(s: string): number {
  const lettersArr = s.split('');
  const lettersMap = new Map();
  const occurencesMap = new Map();

  let index = 0;
  let result = 0;
  let count = 0;
  let value = '';
  lettersArr.forEach((letter) => {
    if (lettersMap.has(letter)) {
      index++;
      const indexOf = lettersMap.get(letter);
      value = value.slice(indexOf + 1);
      count = value.length;
      lettersMap.clear();

      value.split('').forEach((letter, index) => {
        lettersMap.set(letter, index);
      });
    }

    count++;
    value += letter;
    lettersMap.set(letter, value.length - 1);
    occurencesMap.set(index, count);
  });

  result = occurencesMap.size > 0 ? Math.max(...occurencesMap.values()) : 0;
  return result;
}

// LeetCode answer
function lengthOfLongestSubstringLeet(s: string): number {
  const scanner: string[] = [];
  let longest = 0;

  for (const char of s) {
    const possibleIndex = scanner.indexOf(char);

    if (possibleIndex !== -1) {
      scanner.splice(0, possibleIndex + 1);
    }
    scanner.push(char);
    longest = Math.max(longest, scanner.length);
  }

  return longest;
}

// My adjusted answer
function lengthOfLongestSubstringFinal(s: string): number {
  let result = 0;
  let value = '';
  for (const char of s) {
    if (value.includes(char)) {
      const indexOf = value.indexOf(char);
      value = value.slice(indexOf + 1);
    }

    value += char;
    result = Math.max(result, value.length);
  }

  return result;
}

const lengthVar = lengthOfLongestSubstring('dvdf');
