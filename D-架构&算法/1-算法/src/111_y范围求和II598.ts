;(function(){
    /**
     * 598. 范围求和 II
     * 给你一个 m x n 的矩阵 M ，初始化时所有的 0 和一个操作数组 op ，其中 ops[i] = [ai, bi] 意味着当所有的 0 <= x < ai 和 0 <= y < bi 时， M[x][y] 应该加 1。
     * 在 执行完所有操作后 ，计算并返回 矩阵中最大整数的个数 。
     * 
     * 输入: m = 3, n = 3，ops = [[2,2],[3,3]]
     * 输出: 4
     * 解释: M 中最大的整数是 2, 而且 M 中有4个值为2的元素。因此返回 4。
     * 
     * 输入: m = 3, n = 3, ops = [[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3],[2,2],[3,3],[3,3],[3,3]]
     * 输出: 4
     * 
     * 输入: m = 3, n = 3, ops = []
     * 输出: 9
     * 
    */

    function maxCount(m: number, n: number, ops: number[][]): number {
        // 方法一：
        let mina = m, minb = n;
        for (const op of ops) {
            mina = Math.min(mina, op[0]);
            minb = Math.min(minb, op[1]);
        }
        return mina * minb;


        // 方法二：

    };

    const m = 3, n = 3, ops = [[2,2],[3,3]];
    console.log(maxCount(m, n, ops))
    
})()