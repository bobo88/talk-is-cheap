;(function(){
    /**
     * 75. 颜色分类
     * 给定一个包含红色、白色和蓝色、共 n 个元素的数组 nums ，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。
     * 我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。
     * 必须在不使用库的sort函数的情况下解决这个问题。
     * 
     * 输入：nums = [2,0,2,1,1,0]
     * 输出：[0,0,1,1,2,2]
     * 
     * 输入：nums = [2,0,1]
     * 输出：[0,1,2]
     * 
     * 进阶：
     * 你可以不使用代码库中的排序函数来解决这道题吗？
     * 你能想出一个仅使用常数空间的一趟扫描算法吗？
     * 
     */

    function sortColors(nums: number[]): void {
        // 方法一：冒泡排序
        let left = 0, right = 0;
        for(let i = 0; i < nums.length; i++) {
            for(let j = i + 1; j < nums.length; j++) {
                let temp = nums[i];
                if (nums[j] < nums[i]) {
                    nums[j] = nums[i]
                    nums[i] = temp
                }

            }
        }
        console.log(nums)
    };

    let nums = [2,0,2,1,1,0];
    // 2 0 2 1 1 0
    // 0 0 1 2 1 2
    // 0 0
    sortColors(nums)

       
})()