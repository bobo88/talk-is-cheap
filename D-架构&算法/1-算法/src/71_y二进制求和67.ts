;(function(){
    /**
     * 67. 二进制求和
     * 给你两个二进制字符串，返回它们的和（用二进制表示）。
     * 输入为 非空 字符串且只包含数字 1 和 0。
     * 
     * 输入: a = "11", b = "1"
     * 输出: "100"
     * 
     * 输入: a = "1010", b = "1011"
     * 输出: "10101"
     * 
    */

    function addBinary(a: string, b: string): string {
        // 方法一：
        // let aLen = a.length;
        // let bLen = b.length;
        // let res: string[] = [];
        // let isEnter: number = 0;
        // while (aLen > 0 || bLen > 0 || isEnter) {
        //     let numA = +(a.charAt(aLen - 1) || '0');
        //     let numB = +(b.charAt(bLen - 1) || '0');
        //     if (numA + numB + isEnter === 3) {
        //         res.unshift('1')
        //         isEnter = 1;
        //     } else if (numA + numB + isEnter === 2) {
        //         res.unshift('0')
        //         isEnter = 1;
        //     } else if (numA + numB + isEnter === 1) {
        //         res.unshift('1')
        //         isEnter = 0;
        //     } else {
        //         // 全部等于0
        //         res.unshift('0');
        //         isEnter = 0;
        //     }
        //     aLen--;
        //     bLen--;
        // }
        // return res.join('')

        // 方法二：优化方法一
        let aLen = a.length;
        let bLen = b.length;
        let res: string[] = [];
        let isEnter: number = 0;
        while (aLen > 0 || bLen > 0 || isEnter) {
            let numA = +(a.charAt(aLen - 1) || '0');
            let numB = +(b.charAt(bLen - 1) || '0');
            let addRes = numA + numB + isEnter; // 结果只有 0 1 2 3 四种情况
            if (addRes > 1) {
                res.unshift(addRes % 2 === 1 ? '1' : '0')
                isEnter = 1;
            } else if (addRes === 1) {
                res.unshift('1')
                isEnter = 0;
            } else {
                // 全部等于0
                res.unshift('0');
                isEnter = 0;
            }
            aLen--;
            bLen--;
        }
        return res.join('')
    };

    // let  a = "11", b = "1";
    let a = "1010", b = "1011";
    console.log(addBinary(a, b))

})()