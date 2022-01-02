// Complete the getSecondLargest function in the editor below.
//     getSecondLargest has the following parameters:
//         int nums[n]: an array of integers
//     Returns - int: the second largest number in nums
const getSecondLargest = (nums) => {
  let max = -Infinity,
    result = -Infinity;
  for (const value of nums) {
    const currentNum = Number(value);
    if (currentNum > max) {
      [result, max] = [max, currentNum]; // save previous max
    } else if (currentNum < max && currentNum > result) {
      result = currentNum; // new second biggest
    }
  }
  return result;
};
