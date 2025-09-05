/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]

*/

/*
Use a hash map to store the indices of the numbers as we iterate through the array.
If the complement (target - current number) exists in the map, we return the indices.
*/
/* 
const twoSum = (nums, target)=>{
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
}

twoSum([2,7,11,15], 9); // Output: [0,1]
twoSum([3,2,4], 6); // Output: [1,2]
twoSum([3,3], 6); // Output: [0,1]  
*/
/* This is a more optimized version using an object instead of a Map.
*/
const twoSum = (nums, target) => {
    
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if(obj.hasOwnProperty(complement)){
            return [obj[complement], i]
        }
        obj[nums[i]] = i;
    }
}

//twoSum([2,7,11,15], 9);


