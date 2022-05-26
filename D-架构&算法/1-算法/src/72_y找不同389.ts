;(function(){
    /**
     * 389. 找不同
     * 给定两个字符串 s 和 t ，它们只包含小写字母。
     * 字符串 t 由字符串 s 随机重排，然后在随机位置添加一个字母。
     * 请找出在 t 中被添加的字母。
     * 
     * 输入：s = "abcd", t = "abcde"
     * 输出："e"
     * 解释：'e' 是那个被添加的字母。
     * 
     * 输入：s = "", t = "y"
     * 输出："y"
     * 
    */

    function findTheDifference(s: string, t: string): string {
        // 方法一：
        let ans: string = '';
        let sSort = s.split('').sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));
        let tSort = t.split('').sort((a: string, b: string) => a.charCodeAt(0) - b.charCodeAt(0));
        for (let i = 0; i < tSort.length; i++) {
            if (sSort[i] !== tSort[i]) {
                ans = tSort[i];
                break;
            }
        }
        return ans

        // 方法二：
        
    };

    let s = "abcd", t = "abdec";
    let s1 = "", t1 = "y"
    console.log(findTheDifference(s, t))
    console.log(findTheDifference(s1, t1))
})()