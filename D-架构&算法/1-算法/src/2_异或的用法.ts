;(function(){
  let a = 11; // 甲
  let b = 6; // 乙
  
  // 使用 异或 ^ 来交换 a/b 的值
  a = a ^ b; // 1. a = 甲 ^ 乙 , b = 乙
  b = a ^ b; // 2. a = 甲 ^ 乙 , b = 甲 ^ 乙 ^ 乙 --> 推出: b = 甲
  a = a ^ b; // 3. a = 甲 ^ 乙 ^ 甲 --> 推出: a = 乙, b = 甲
  console.log('a & b: ', a, b)
  
  // ES6+ 的快速方法
  let x = 10;
  let y = 20;
  [x, y] = [y, x];
  console.log('x & y: ', x, y)
})()
