// Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

// A subarray is a contiguous part of an array.

// Example 1:

// Input: nums = [4,5,0,-2,-3,1], k = 5
// Output: 7
// Explanation: There are 7 subarrays with a sum divisible by k = 5:
// [4, 5, 0, -2, -3, 1], [5], [5, 0], [5, 0, -2, -3], [0], [0, -2, -3], [-2, -3]
// Example 2:

// Input: nums = [5], k = 9
// Output: 0

// 只记录有相同remain的次数次数即可，因为相同余数的sum相减一定为整除。
// set 0 ,1 是因为包含本身即可整除的数字

var subarraysDivByK = function (nums, k) {
  let count = 0;
  let map = new Map();
  map.set(0, 1);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    let rem = sum % k;
    if (rem < 0) rem += k;
    if (map.has(rem)) {
      count += map.get(rem);
      map.set(rem, map.get(rem) + 1);
    } else {
      map.set(rem, 1);
    }
  }
  return count;
};
