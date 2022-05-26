;(function(){
    /**
     * 14. 最长公共前缀
     * 编写一个函数来查找字符串数组中的最长公共前缀。
     * 如果不存在公共前缀，返回空字符串 ""。
     * 
     * 输入：strs = ["flower","flow","flight"]
     * 输出："fl"
     * 
     * 输入：strs = ["dog","racecar","car"]
     * 输出：""
     * 解释：输入不存在公共前缀。
     * 
     */

    function longestCommonPrefix(strs: string[]): string {
        // 方法一：
        // if (strs === null || strs.length === 0) {
        //     return ''
        // }
        // let index = 0;
        // let reference = strs[0];
        // for (let i = 0; i < reference.length; i++) {
        //     let bool = strs.every(item => item.startsWith(reference.slice(0, i + 1)))
        //     if (bool) {
        //         index++
        //     } else {
        //         break;
        //     }
        // }
        // return reference.slice(0, index) || ''

        // 方法二：纵向扫描
        if (strs === null || strs.length === 0) {
            return ''
        }
        const first = strs[0]
        const len = first.length
        const count = strs.length
        for (let i = 0; i < len; i++) {
            let curChar = first.charAt(i)
            for (let j = 1; j < count; j++) {
                if (i === strs[j].length || strs[j].charAt(i) !== curChar) {
                    return first.substring(0, i)
                }
            }
        }
        return first

        // 方法三：二分查找
        // todo
    };
    
    console.log(longestCommonPrefix(["flower","flow","flight"]))

})()