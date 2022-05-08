;(function(){
    /**
     * 242. 有效的字母异位词
     * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
     * 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。
     * 
     * 输入: s = "anagram", t = "nagaram"
     * 输出: true
     * 
     * 输入: s = "rat", t = "car"
     * 输出: false
     * 
     * 进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？
     */

    function isAnagram(s: string, t: string): boolean {
        // 方法一
        // if (s.length !== t.length) {
        //     return false
        // }
        // let sArr = s.split('')
        // let tArr = t.split('')
        // sArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        // tArr.sort((a, b) => a.charCodeAt(0) - b.charCodeAt(0))
        // // console.log(sArr, tArr)
        // return sArr.join('') === tArr.join('') || false

        // 方法二: 耗时较多
        // if (s.length !== t.length) {
        //     return false
        // }
        // let bool = true;
        // for(const c of s) {
        //     t = t.replace(c, '')
        // }
        // return t.length === 0 || false

        // 方法三
        if (s.length !== t.length) {
            return false
        }
        let cnt = new Array(26).fill(0);
        let aCharCode = 'a'.charCodeAt(0);
        for(const c of s) {
            cnt[c.charCodeAt(0) - aCharCode]++;
        }
        for(const c of t) {
            cnt[c.charCodeAt(0) - aCharCode]--;
        }
        return cnt.every(i => i === 0) || false

        // 方法四
        // return s.length == t.length && [...Array.from(s)].sort().join('') === [...Array.from(t)].sort().join('')
    };

    let s = "anagram", t = "nagaram";
    console.log(isAnagram(s, t))

})()