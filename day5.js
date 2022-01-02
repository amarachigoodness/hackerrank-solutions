// Complete the function in the editor. It has one parameter: an array, nums. It must iterate through the array performing one of the following actions on each element:

// If the element is even, multiply the element by 2.
// If the element is odd, multiply the element by 3.
// The function must then return the modified array.

const modifyArray = (nums) => {
  return nums.map((num) => (num % 2 === 0 ? (num = num * 2) : (num = num * 3)));
};
