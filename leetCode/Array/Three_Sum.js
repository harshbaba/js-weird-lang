function threeSum(nums) {
    const result = [];
    nums.sort((a, b) => a - b); // Sort the array to use two-pointer technique

    for (let i = 0; i < nums.length - 2; i++) {
        // Skip duplicate elements for the first number
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);

                // Skip duplicates for left and right
                while (left < right && nums[left] === nums[left + 1]) left++;
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // We need a larger number
            } else {
                right--; // We need a smaller number
            }
        }
    }

    return result;
}

// Example test cases
console.log(threeSum([-1, 0, 1, 2, -1, -4])); // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([0, 1, 1]));             // []
console.log(threeSum([0, 0, 0]));             // [[0, 0, 0]]
