;(function(){
    /**
     * 500. 键盘行
     * 给你一个字符串数组 words ，只返回可以使用在 美式键盘 同一行的字母打印出来的单词。键盘如下图所示。
     * 美式键盘 中：
     * 第一行由字符 "qwertyuiop" 组成。
     * 第二行由字符 "asdfghjkl" 组成。
     * 第三行由字符 "zxcvbnm" 组成。
     * 
     * 输入：words = ["Hello","Alaska","Dad","Peace"]
     * 输出：["Alaska","Dad"]
     * 
     * 输入：words = ["omk"]
     * 输出：[]
     * 
     * 输入：words = ["adsdf","sfd"]
     * 输出：["adsdf","sfd"]
     * 
     */

    function findWords(words: string[]): string[] {
        // 方法一：
        const line1 = 'qwertyuiop';
        const line2 = 'asdfghjkl';
        const line3 = 'zxcvbnm';
        const ans = words.filter(item => {
            let itemArr = item.toLowerCase().split('');
            let indexArr: number[] = [];
            for (let i = 0; i < itemArr.length; i++) {
                line1.includes(itemArr[i]) && (indexArr.push(1));
                line2.includes(itemArr[i]) && (indexArr.push(2));
                line3.includes(itemArr[i]) && (indexArr.push(3));
            }
            return [...Array.from(new Set(indexArr))].length === 1
        })
        return ans

        // 方法二：
        
    };

    const words = ["Hello","Alaska","Dad","Peace"];
    const words1 = ["omk"];
    const words2 = ["adsdf","sfd"];
    console.log(findWords(words))
    console.log(findWords(words1))
    console.log(findWords(words2))


})()