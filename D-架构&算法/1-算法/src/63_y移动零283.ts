;(function(){
    /**
     * 283. 移动零
     * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
     * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
     * 
     * 输入: nums = [0,1,0,3,12]
     * 输出: [1,3,12,0,0]
     * 
     * 输入: nums = [0]
     * 输出: [0]
     * 
     * 进阶：你能尽量减少完成的操作次数吗？
     * 
     */

    function moveZeroes(nums: number[]): void {
        // 方法一：双指针
        // if (!nums) {
        //     return
        // }
        // let len: number = nums.length;
        // let p1: number = 0;
        // // 1. 非0的数全部提前
        // for(let i = 0; i < len; i++) {
        //     if (nums[i] !== 0) {
        //         nums[p1++] = nums[i];
        //     }
        // }
        // // 2. 下标p1后的数全部设置为0
        // for (let i = p1; i < len; i++) {
        //     nums[i] = 0
        // }

        // 方法二： 双指针
        // if (!nums) {
        //     return
        // }
        // const len: number = nums.length;
        // let left: number = 0, right: number = 0;
        // for (let i = 0; i < len; i++) {
        //     if (nums[right] !== 0) {
        //         let temp = nums[right]
        //         nums[right] = 0;
        //         nums[left] = temp;
        //         left++
        //     }
        //     right++
        // }

        // 方法三： 一次遍历
        if (!nums) {
            return
        }
        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== 0) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j++] = temp
            }
        }

   
    };

    // let nums = [0, 1, 0, 3, 12]
    let nums = [0, 0, 1]
    moveZeroes(nums)
    console.log(nums)


})()