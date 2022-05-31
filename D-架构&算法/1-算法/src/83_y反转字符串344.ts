;(function(){
    /**
     * 344. 反转字符串
     * 编写一个函数，其作用是将输入的字符串反转过来。输入字符串以字符数组 s 的形式给出。
     * 不要给另外的数组分配额外的空间，你必须原地修改输入数组、使用 O(1) 的额外空间解决这一问题。
     * 
     * 输入：s = ["h","e","l","l","o"]
     * 输出：["o","l","l","e","h"]
     * 
     * 输入：s = ["H","a","n","n","a","h"]
     * 输出：["h","a","n","n","a","H"]
     * 
     */

    /**
     Do not return anything, modify s in-place instead.
    */
    function reverseString(s: string[]): void {
        // 方法一：
        // let sLen = s.length;
        // let mid = Math.ceil(sLen / 2);
        // for (let i = 0; i < mid; i++) {
        //     let temp = s[i];
        //     let rItem = s[sLen - 1 - i];
        //     s[i] = rItem;
        //     s[sLen - 1 - i] = temp;
        // }
        
        // 方法二： 双指针
        const n = s.length;
        for (let left = 0, right = n - 1; left < right; ++left, --right) {
            [s[left], s[right]] = [s[right], s[left]]
        }

    };
    
    let s = ["h","e","l","l","o"];
    let s2 = ["H","a","n","n","a","h"];
    reverseString(s)
    reverseString(s2)
    console.log(s)
    console.log(s2)

})()