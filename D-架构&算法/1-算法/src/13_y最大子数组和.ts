/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums: number[]) {
    let pre = 0;
    let maxNum = nums[0];
    nums.forEach(x => {
        pre = Math.max(pre + x, x);
        maxNum = Math.max(maxNum, pre)
    })
    return maxNum
};
console.log(maxSubArray([1, 2, -3, 4, 1, 4, 5, -2, 3, -5, 8]))

// 衍生：如何获取最大子数组？
/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArrayGet = function(nums: number[]): number[] {
    let pre = 0;
    let maxNum = nums[0];
    let maxArr: number[] = [];
    nums.forEach(x => {
        // 【A: 累加的值(pre + x)】与 【B: 现在遍历的值(x)】 对比
        pre = Math.max(pre + x, x);
        maxNum = Math.max(maxNum, pre)
        // A === B，maxArr重置，否则push B
        pre === x ? maxArr = [x] : maxArr.push(x)
    })
    return maxArr
};
console.log(maxSubArrayGet([1, 2, -3, 4, 1, 4, 5, -2, 3, -5, 8]))