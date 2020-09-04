const assert = require('chai').assert;

const question = '重新排列一个字符串，使得每个相邻字符都不同，列出所有情况';

// 字符串只包含小写字母或者数字

function reorganize(str) {
  var arr = Array.from(str);
  var len = str.length;
  var result = [];
  if(len ===1) {
    return [str];
  }
  for(let i = 0; i<len-1; i++) {
    var temp = reorganize(str.substring(0,i) + str.substring(i+1));
    for(let j = 0; j<temp.length; j++) {
      if (arr[i] !== temp[j].substr(0,1) && result.indexOf(arr[i]+temp[j])<0) {
        result.push(arr[i]+temp[j]);
      } 
      if (!temp[j].endsWith(arr[i]) && result.indexOf(temp[j]+arr[i])<0) {
        result.push(temp[j]+arr[i]);
      }
    }
  }

  return result;
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    assert.deepEqual(reorganize('aabb').sort(), ['abab', 'baba']);
    assert.deepEqual(reorganize('aaabbbb'), ['bababab']);
    assert.deepEqual(reorganize('1bbbbb'), []);
    return "通过";
  } catch (ex) {
    return "不通过";
  }
}