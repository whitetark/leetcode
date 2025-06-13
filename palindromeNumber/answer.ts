// https://leetcode.com/problems/palindrome-number/

// String answer
function isPalindromeToString(x: number): boolean {
  const text = String(x).split('');
  let isPalindrome = true;

  for (let i = 0; i < Math.floor(text.length / 2); i++) {
    isPalindrome = text[i] === text[text.length - 1 - i];
    if (!isPalindrome) {
      break;
    }
  }

  return isPalindrome;
}

// Wrong answer (I assumed every number that divides 11 is palindrome)
function isPalindromeWrong(x: number): boolean {
  if (x < 0 || (x > 9 && x < 100 && x % 11 !== 0)) {
    return false;
  }

  if (x % 11 == 0) {
    return true;
  }

  const len = Math.ceil(Math.log10(x + 1));
  const deleteNumber = Math.floor(len / 2);

  console.log(len, deleteNumber);

  const pow10d = Math.pow(10, deleteNumber);
  const pow10d1 = Math.pow(10, deleteNumber + 1);
  const result = x - (Math.floor(x / pow10d) - Math.floor(x / pow10d1)) * pow10d;

  return result % 11 == 0;
}

// Right answer (with Leetcode hint)
function isPalindrome(x: number): boolean {
  if (x < 0) {
    return false;
  }

  let tempNum = x;
  let reverseNum = 0;
  while (tempNum != 0) {
    reverseNum = reverseNum * 10 + (tempNum % 10);
    tempNum = Math.trunc(tempNum / 10);
  }

  return x === reverseNum;
}

console.log(isPalindrome(12521));

313;
