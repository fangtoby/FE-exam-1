const assert = require('chai').assert;

const question = '找出一个字符串中，所有长度为 n，且出现超过 1 次的子串';

function findChildStr(str, n) {
  /**
   * 此处写代码逻辑
   */
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.deepEqual(findChildStr('AAAAAAAABBAAAAAAAA', 8), ['AAAAAAAA']);
    assert.deepEqual(findChildStr('AAACCCAAACCCAAA', 2), ['AA', 'AC', 'CC', 'CA']);
    return "通过";
  } catch (ex) {
    return "不通过";
  }
}