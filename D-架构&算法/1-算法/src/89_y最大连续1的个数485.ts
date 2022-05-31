;(function(){
    /**
     * 485. 最大连续 1 的个数
     * 给定一个二进制数组 nums ， 计算其中最大连续 1 的个数。
     * 
     * 输入：nums = [1,1,0,1,1,1]
     * 输出：3
     * 解释：开头的两位和最后的三位都是连续 1 ，所以最大连续 1 的个数是 3.
     * 
     * 输入：nums = [1,0,1,1,0,1]
     * 输出：2
     * 
     */

    function findMaxConsecutiveOnes(nums: number[]): number {
        // 方法一：
        // 以 0 进行数组切分
        let str: string = nums.join('')
        let strArr: string[] = str.split('0')
        let max: number = 0;
        strArr.map(item => {
            max = Math.max(max, item.length)
        })
        return max
    };

    let nums = [1,1,0,1,1,1];
    let nums2 = [1,0,1,1,0,1];
    console.log(findMaxConsecutiveOnes(nums))
    console.log(findMaxConsecutiveOnes(nums2))
  
})()