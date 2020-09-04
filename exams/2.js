const assert = require('chai').assert;

const question = '找出一个字符串中，所有长度为 n，且出现超过 1 次的子串';

function findChildStr(str, n) {
  var len = str.length;
  var result = [];
  if (len < n) {
    return result;
  }
  for(let i = 0; i<len-n; i++) {
    if(str.substring(i+n).indexOf(str.substr(i, n))>=0) {
      if (!result.includes(str.substr(i, n))) {
        result.push(str.substr(i, n));
      }
    }
  }
  return result;
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.deepEqual(findChildStr('AAAAAAAABBAAAAAAAA', 8), ['AAAAAAAA']);
    assert.deepEqual(findChildStr('AAACCCAAACCCAAA', 2).sort(), ['AA', 'AC', 'CC', 'CA'].sort());
    return "通过";
  } catch (ex) {
    return "不通过";
  }
}