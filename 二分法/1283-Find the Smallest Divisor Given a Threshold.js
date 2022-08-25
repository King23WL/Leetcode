// Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

// Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

// The test cases are generated so that there will be an answer.

// Example 1:

// Input: nums = [1,2,5,9], threshold = 6
// Output: 5
// Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1.
// If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2).
// Example 2:

// Input: nums = [44,22,33,11,1], threshold = 5
// Output: 44

/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function (nums, threshold) {
  let start = 1;
  let end = Math.max(...nums);

  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);
    let total = 0;
    for (let n of nums) {
      total += Math.ceil(n / mid); // as the ques says to round off the next  greater val we use Math.ceil()
    }
    if (total <= threshold) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
};

//O nlog(max nums)
