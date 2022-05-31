;(function(){
    /**
     * 448. 找到所有数组中消失的数字
     * 给你一个含 n 个整数的数组 nums ，其中 nums[i] 在区间 [1, n] 内。
     * 请你找出所有在 [1, n] 范围内但没有出现在 nums 中的数字，并以数组的形式返回结果。
     * 
     * 输入：nums = [4,3,2,7,8,2,3,1]
     * 输出：[5,6]
     * 
     * 输入：nums = [1,1]
     * 输出：[2]
     * 
     * 进阶：你能在不使用额外空间且时间复杂度为 O(n) 的情况下解决这个问题吗? 你可以假定返回的数组不算在额外空间内。
     */

    function findDisappearedNumbers(nums: number[]): number[] {
        // 方法一：消耗时间较多
        // let n = nums.length;
        // let res: number [] = [];
        // for (let i = 1; i <= n; i++) {
        //     !nums.includes(i) && res.push(i);
        // }
        // return res

        // 方法二：
        let n = nums.length;
        let res: number[] = [];
        // 去重 & 排序
        let newNums = [...Array.from(new Set(nums))].sort((a, b) => a - b);
        for (let i = 1; i <= n; i++) {
            newNums[i - res.length - 1] !== i && res.push(i)
        }
        return res

        // 方法三：
        // const n = nums.length;
        // for (const num of nums) {
        //     const x = (num - 1) % n;
        //     nums[x] += n;
        // }
        // const ret = [];
        // for (const [i, num] of nums.entries()) {
        //     if (num <= n) {
        //         ret.push(i + 1);
        //     }
        // }
        // return ret;

    };

    const nums = [4,3,2,7,8,2,3,1];
    console.log(findDisappearedNumbers(nums))

})()