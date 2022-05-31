;(function(){
    /**
     * 290. 单词规律
     * 给定一种规律 pattern 和一个字符串 s ，判断 s 是否遵循相同的规律。
     * 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。
     * 
     * 输入: pattern = "abba", str = "dog cat cat dog"
     * 输出: true
     * 
     * 输入:pattern = "abba", str = "dog cat cat fish"
     * 输出: false
     * 
     * 输入: pattern = "aaaa", str = "dog cat cat dog"
     * 输出: false
     * 
     */

    function wordPattern(pattern: string, s: string): boolean {
        // 方法一：
        type ObjType = {
            [prop: string]: string
        }
        let a2b: ObjType = {};
        let b2a: ObjType = {};
        let aLen = pattern.length;
        let strArr = s.split(' ');
        if (aLen !== strArr.length) return false;
        // console.log(strArr)
        for (let i = 0; i < aLen; i++) {
            let x = pattern[i], y = strArr[i];
            if ((a2b[y] && a2b[y] !== x) || (b2a[x] && b2a[x] !== y)) {
                return false
            }
            a2b[y] = x;
            b2a[x] = y;
        }
        return true
    };

    const pattern = "abba", str = "dog cat cat dog";
    const pattern2 = "abba", str2 = "dog cat cat fish";
    console.log(wordPattern(pattern, str))
    console.log(wordPattern(pattern2, str2))

})()