const assert = require('chai').assert;

const question = '给定一个自然数 n，算出 n 的阶乘，分别用递归和循环两种方式实现';

// 阶乘: n！= n* (n-1) * ... * 5 * 4 * 3 * 2 * 1
// 递归实现里，需要考虑 n 极大时的爆栈情况

function recursion(n, total = 1) {
  if(n===1) {
    return total;
  }
  return recursion(n-1, n*total);
  // return n*arguments.callee(n-1);
}
  
function loop(n) {
  var result = n;
  n = n -1;
  while(n>0){
    result = n * result;
    n--;
  }
  return result;
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.equal(recursion(3), 6);
    assert.equal(loop(3), 6);
    assert.equal(recursion(20), 2432902008176640000);
    assert.equal(loop(20), 2432902008176640000);
    return "通过";
  } catch (ex) {
    return "不通过";
  }
}