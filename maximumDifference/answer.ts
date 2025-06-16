// https://leetcode.com/problems/maximum-difference-between-increasing-elements/description/

// My answer
function maximumDifference(nums: number[]): number {
  let maximumDifference = -1;
  let minLeft = Number.MAX_SAFE_INTEGER;

  nums.forEach((num) => {
    if (minLeft > num) {
      minLeft = num;
    } else {
      maximumDifference = Math.max(maximumDifference, num - minLeft);
    }

    maximumDifference = Math.max(maximumDifference, num - minLeft);
  });

  return maximumDifference > 0 ? maximumDifference : -1;
}

console.log(maximumDifference([9, 4, 3, 2]));
