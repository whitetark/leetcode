//https://leetcode.com/problems/two-sum/

//First try
function twoSumLoops(nums: number[], target: number): number[] | undefined {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i == j) {
        continue;
      }

      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}

//Second try (Leetcode hint)
function twoSumHash(nums: number[], target: number): number[] {
  let numsMap = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    let searchFor = target - nums[i];

    if (numsMap.has(searchFor)) {
      return [numsMap.get(searchFor)!, i];
    }

    numsMap.set(nums[i], i);
  }

  return [];
}

console.log(twoSumHash([2, 7, 11, 15], 9));
