;(function(){
    /**
     * 645. 错误的集合
     * 集合 s 包含从 1 到 n 的整数。不幸的是，因为数据错误，导致集合里面某一个数字复制了成了集合里面的另外一个数字的值，导致集合 丢失了一个数字 并且 有一个数字重复 。
     * 给定一个数组 nums 代表了集合 S 发生错误后的结果。
     * 请你找出重复出现的整数，再找到丢失的整数，将它们以数组的形式返回。
     * 
     * 输入：nums = [1,2,2,4]
     * 输出：[2,3]
     * 
     * 输入：nums = [1,1]
     * 输出：[1,2]
     * 
     */

    function findErrorNums(nums: number[]): number[] {
        // 方法一：
        nums.sort((a, b) => a - b);
        let res: number[] = [];
        let n = nums.length;
        let key: number = 0;
        for (let i = 1; i <= n; i++) {
            if (!nums.includes(i)) {
                key = i
            }
        }
        for (let i = 0; i < nums.length; i++) {
            nums[i] === nums[i+1] && res.push(nums[i])
        }
        res.push(key)
        return res;

        // 方法二：

    };
    
    const nums = [1,2,2,4];
    const nums2 = [1,1];
    const nums3 = [2,2];
    const nums4 = [1,5,3,2,2,7,6,4,8,9]
    console.log(findErrorNums(nums))
    console.log(findErrorNums(nums2))
    console.log(findErrorNums(nums3))
    console.log(findErrorNums(nums4))
})()