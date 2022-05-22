;(function(){
    /**
     * 59. 螺旋矩阵 II
     * 给你一个正整数 n ，生成一个包含 1 到 n2 所有元素，且元素按顺时针顺序螺旋排列的 n x n 正方形矩阵 matrix 。
     * 
     * 输入：n = 3
     * 输出：[[1,2,3],[8,9,4],[7,6,5]]
     * 
     * 输入：n = 1
     * 输出：[[1]]
     * 
     */

    function generateMatrix(n: number): number[][] {
        // 方法一： 官网提供
        let t = 0;
        let b = n - 1;
        let l = 0;
        let r = n - 1;
        let ans: number[][] = new Array(n).fill(0).map(i => []);
        let k = 1;
        while(k <= n * n) {
            for(let i=l;i<=r;++i,++k) ans[t][i] = k;
            ++t;
            for(let i=t;i<=b;++i,++k) ans[i][r] = k;
            --r;
            for(let i=r;i>=l;--i,++k) ans[b][i] = k;
            --b;
            for(let i=b;i>=t;--i,++k) ans[i][l] = k;
            ++l;
        }
        return ans

        // 方法一：
        // if (!n) {
        //     return []
        // }
        // let total: number = n * n;
        // let nums: number[] = [];
        // let res: number[][] = new Array(n).fill(0).map(i => []);
        // for(let i = 1; i <= total; i++) {
        //     nums.push(i)
        // }
        // let index: number = 0;
        // let i = 0, j = 0;

        // // let key = 'A'
        // // while(index <= total) {
        // //     if (res[i] && !res[i][j]) {
        // //         res[i][j] = nums[index];
        // //         // 要归纳总结以下规律：
        // //         key === 'A' && (j < n - 1 ? j++ : key = 'B');
        // //         key === 'B' && (i < n - 1 ? i++ : key = 'C');
        // //         key === 'C' && (j > 0 ? j-- : key = 'D'); // j: 2 1 0 --> 5 6 7
        // //         key === 'D' && (i > 1 ? i-- : key = 'E'); // j=0 i--(2,1,0) --> [2][0]:7 & [1][0]:8 --> [0][0]: 1
        // //         key === 'E' && (j < n - 2 ? j++ : key = 'F');
        // //         key === 'F' && (i < n - 2 ? i++ : key = 'G');
        // //         key === 'G' && (j > 1 ? j-- : key = 'H')

        // //     }
        // //     index++
        // // }

        // let key: number | string = 0
        // let maxKey = n * 2
        // while(index <= total) {
        //     if (res[i] && !res[i][j]) {
        //         res[i][j] = nums[index];
        //         // 要归纳总结以下规律：
        //         key === maxKey && (j < n - 1 ? j++ : key = 'B');
        //         key === 'B' && (i < n - 1 ? i++ : key = 'C');
        //         key === 'C' && (j > 0 ? j-- : key = 'D'); // j: 2 1 0 --> 5 6 7
        //         key === 'D' && (i > 1 ? i-- : key = 'E'); // j=0 i--(2,1,0) --> [2][0]:7 & [1][0]:8 --> [0][0]: 1
        //         key === 'E' && (j < n - 2 ? j++ : key = 'F');
        //         key === 'F' && (i < n - 2 ? i++ : key = 'G');
        //         key === 'G' && (j > 1 ? j-- : key = 'H')
        //         while(key < maxKey) {

        //         }

        //     }
        //     index++
        // }

        // return res
    };

    // console.log(generateMatrix(1))
    // console.log(generateMatrix(2))
    console.log(generateMatrix(3))
    console.log(generateMatrix(4))


})()