/*
 * @Author: Bob
 * @Date: 2022-04-16 17:38:16
 * @LastEditors: Bob
 * @LastEditTime: 2022-04-17 20:45:46
 * @Description: 
 * 
 */
;(function(){
  // 相关标签： 数组 二分法
  // 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
  // 请必须使用时间复杂度为 O(log n) 的算法。
  // interface NumberArray {
  //   [index: number]: number
  // }
  
  // 希尔排序

  let arr: number[] = [1, 2, 3, 4, 5, 6, 8, 9];
  let target: number = 7;

  function insertSort(arr: number[], target: number) {
    let len = arr.length;
    if (target > arr[len - 1]) {
      // xx
    }
  }

  insertSort(arr, target)
  console.log(12)
})()