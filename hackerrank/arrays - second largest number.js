/**
*   Return the second largest number in the array.
*   @param {Number[]} nums - An array of numbers.
*   @return {Number} The second largest number in the array.
**/
function getSecondLargest(nums) {
    // Complete the function
    // sort the numbers in the array nums
    nums.sort((a,b) => a-b);
    // create another array nums2 with the numbers but the largest
    const nums2 = nums.filter(x => x < nums[nums.length-1]);
    //check if the array nums2 length
    if (nums2.length === 0) {
        return -1
    } else {
        return nums2[nums2.length-1];
    };
}
//console.log(getSecondLargest([2,3,6,6,5]));
console.log(getSecondLargest([2,2,6,6,6]));
