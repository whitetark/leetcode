// My Answer before submitting
type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n <= 0) {
    return arr;
  }

  let resultArr: MultiDimensionalArray = [];
  function flatElement(el: number | MultiDimensionalArray, depth: number = 0) {
    if (typeof el === 'number' || depth > n) {
      resultArr.push(el);
      return;
    }

    el.forEach((value) => {
      flatElement(value, depth + 1);
    });
  }

  flatElement(arr);

  return resultArr;
};

//With leetcode hint
var flatImproved = function (arr: MultiDimensionalArray, n: number): MultiDimensionalArray {
  if (n <= 0) {
    return arr;
  }

  let resultArr: MultiDimensionalArray = [];

  arr.forEach((value) => {
    if (typeof value === 'number') {
      resultArr.push(value);
      return;
    }

    const flatResult = flatImproved(value, n - 1);
    resultArr.push(...flatResult);
  });

  return resultArr;
};

//Initial answer is better by perfomance
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
console.log(flatImproved(arr, 1));
