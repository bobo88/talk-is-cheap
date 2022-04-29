;(function(){
    // 插入排序 - 01
    // interface NumberArray {
    //     number[]
    // }
    let arr: number[] = [1, 2, 10,  20, 12, 3, 4, 5, 6, 8, 9];
  
    function insertSort(arr: number[]) {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
            console.log(arr[i])
        }
    }
    insertSort(arr)
})()