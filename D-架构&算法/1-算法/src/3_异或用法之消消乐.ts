;(function(){
  // 1、已知数组中，一种数出现奇数次，其他数出现偶数次，找到该数？
  // 2、已知数组中，两种数出现奇数次，其他数出现偶数次，找到这两种数？
  
  // 要求： 时间复杂度 O(N)，空间复杂度 O(1)
  
  // 1. 类似“消消乐”
  let arr = [1, 2, 3, 2, 2, 3, 1];
  let res = 0;
  for (let j = 0; j < arr.length; j++) {
      res ^= arr[j];
  }
  console.log('Res: ', res) // 2
  
  // 2. TODO
  let arr2 = [1, 3, 2, 2, 5, 4, 4, 5, 6, 6];
  let eor = 0;
  for(let i = 0; i < arr2.length; i++) {
      eor ^= arr2[i];
  }
  // console.log(11111, eor) // eor: 2 --> 0010
  let rightOne = eor & (~eor + 1); // 取反加一，&操作后，得到一个数据的最右侧的 1
  // console.log(222, rightOne) // rightOne: 2
  let onlyOne = 0;
  for(let j = 0; j < arr2.length; j++) {
      // (arr2[j] & rightOne ) == 1 ? 结果不对
      (arr2[j] & rightOne ) == 0 ? onlyOne ^= arr2[j] : null;
  }
  console.log('Res2: ', onlyOne, (eor ^ onlyOne))
})()
