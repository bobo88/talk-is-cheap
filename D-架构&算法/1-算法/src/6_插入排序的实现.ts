;(function(){
  let swap = function (arr: number[], i: number, j: number) {
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  let arr = [1, 2, 3, 4]
  swap(arr, 2, 3)
  console.log(arr)
})()