;(function(){
    /**
     * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
     * @param {number[]} nums
     * @return {boolean}
     */
     var containsDuplicate = function(nums: number[]) {
        // 方法一
        // let _len = nums.length;
        // let setArr = Array.from(new Set(nums));
        // let _newLen = [...setArr].length;
        // return _len !== _newLen
    
        // 方法二
        // const set = new Set();
        // for (const x of nums) {
        //     if(set.has(x)){
        //         return true
        //     }
        //     set.add(x)
        // }
        // return false;
    
        // 方法三
        nums.sort((a, b) => a - b);
        const n = nums.length;
        for (let i = 0; i < n - 1; i++) {
            if (nums[i] === nums[i + 1]) {
            return true;
            }
        }
        return false;
    };
    console.log(containsDuplicate([1, 2, 3, 2, 4, 5, 6]))
    
    // class B {
    //     get x () {
    //         return 1111
    //     }
    // }
    // console.log(new B().x)

})()