;(function(){
    /**
     * 240. 搜索二维矩阵 II
     * 
     */

    function searchMatrix(matrix: number[][], target: number): boolean {
        // 方法一：
        // for (let i = 0; i < matrix.length; i++) {
        //     for (let j = 0; j < matrix[i].length; j++) {
        //         if (matrix[i][j] === target) {
        //             return true;
        //         }
        //     }
        // }
        // return false;

        // 方法四：
        // https://leetcode.cn/problems/search-a-2d-matrix-ii/solution/xiang-xi-tong-su-de-si-lu-fen-xi-duo-jie-fa-by-5-4/
        if (matrix.length === 0 || matrix[0].length === 0) {
            return false;
        }
        let row = 0;
        let col = matrix[0].length - 1;
        while (row < matrix.length && col >= 0) {
            if (target > matrix[row][col]) {
                row++;
            } else if (target < matrix[row][col]) {
                col--;
            } else {
                return true;
            }
        }
        return false;

        // 方法二：二分查找

        // 方法三： Z字形查找

    };

    const matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5;
    const matrix2 = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target2 = 20;
    console.log(searchMatrix(matrix, target))
    console.log(searchMatrix(matrix2, target2))


})()