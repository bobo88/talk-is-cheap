;(function(){
    /**
     * 118. 杨辉三角
     * 给定一个非负整数 numRows，生成「杨辉三角」的前 numRows 行。
     * 在「杨辉三角」中，每个数是它左上方和右上方的数的和。
     * 
     * 输入: numRows = 5
     * 输出: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
     * 
     * 输入: numRows = 1
     * 输出: [[1]]
     * 
     * map 返回新数组，forEach 不返回
     */
    function generate(numRows: number): number[][] {
        // 方法一
        // 生成三角框架结构（默认赋值1）
        let rtnArr = new Array(numRows).fill(1).map((x, k) => new Array(k + 1).fill(1));
        // console.log(rtnArr) // [ [ 1 ], [ 1, 1 ], [ 1, 1, 1 ] ]
        rtnArr.forEach((x, k, arr) => {
            arr[k].forEach((item, index, sArr) => {
                // 第二列开始重新计算赋值，每一行的第一个不用处理（index > 0)
                // 核心：当前元素的值（下标N） = 上一行（下标N-1） + 上一行（下标N）之和
                if (k > 0 && index > 0) {
                    sArr[index] = (arr[k - 1][index - 1] || 0) + (arr[k - 1][index] || 0);
                }
            })
        })
        return rtnArr

        // 方法二
        // todo....
    };
    // console.log(generate(3))
    console.log(generate(5))
    // console.log(generate(8))

})()