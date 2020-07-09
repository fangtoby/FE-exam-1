const assert = require('chai').assert;

const question = '重新排列一个字符串，使得每个相邻字符都不同，列出所有情况';

// 字符串只包含小写字母或者数字

function reorganize(str) {
  /**
   * 此处写代码逻辑
   */
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.equal(reorganize('aabb'), ['abab', 'baba']);
    assert.equal(reorganize('aaabbbb'), ['bababab']);
    assert.equal(reorganize('1bbbbb'), []);
    return "通过";
  } catch (ex) {
    return "不通过";
  }
}