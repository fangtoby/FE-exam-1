const assert = require('chai').assert;

const question = '给定一个自然数 n，算出 n 的阶乘，分别用递归和循环两种方式实现';

// 阶乘: n！= n* (n-1) * ... * 5 * 4 * 3 * 2 * 1
// 递归实现里，需要考虑 n 极大时的爆栈情况

function recursion(n) {
  /**
   * 此处写递归实现
   */
}
  
function loop(n) {
  /**
   * 此处写循环实现
   */
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