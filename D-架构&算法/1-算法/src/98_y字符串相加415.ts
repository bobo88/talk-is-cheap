;(function(){
    /**
     * 415. 字符串相加
     * 给定两个字符串形式的非负整数 num1 和num2 ，计算它们的和并同样以字符串形式返回。
     * 你不能使用任何內建的用于处理大整数的库（比如 BigInteger）， 也不能直接将输入的字符串转换为整数形式。
     * 
     * 输入：num1 = "11", num2 = "123"
     * 输出："134"
     * 
     * 输入：num1 = "456", num2 = "77"
     * 输出："533"
     * 
     * 输入：num1 = "0", num2 = "0"
     * 输出："0"
     * 
     */

    function addStrings(num1: string, num2: string): string {
        // 方法一：
        let addKey = 0;
        let r1 = num1.length - 1;
        let r2 = num2.length - 1;
        let ans: number[] = [];
        while (r1 >= 0 || r2 >= 0) {
            let addRes = (+num1[r1] || 0) + (+num2[r2] || 0) + addKey;
            if (addRes > 9) {
                addKey = 1;
                ans.unshift(addRes - 10);
            } else {
                addKey = 0;
                ans.unshift(addRes);
            }
            r1 >= 0 && r1--;
            r2 >= 0 && r2--;
        }
        addKey > 0 && ans.unshift(addKey);
        return ans.join('')
    };

    const num1 = "11", num2 = "123";
    const num3 = "456", num4 = "77";
    const num5 = "1", num6 = "9";
    console.log(addStrings(num1, num2))
    console.log(addStrings(num3, num4))
    console.log(addStrings(num5, num6))

})()