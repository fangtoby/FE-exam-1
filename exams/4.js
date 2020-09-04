const assert = require('chai').assert;

const question = '实现一个信号灯控制器，红/黄/绿灯依次点亮 300/200/100 毫秒，不断交替，本题需要自己写测试';

// 红灯亮 300 毫秒，换黄灯亮 200 毫秒，换绿灯亮 100 毫秒，再换红灯 ......

let light = ''; // red, yellow, green
async function execute() {
  var red = new Light('red', 300);
  var yellow = new Light('yellow', 200);
  var green = new Light('green', 300);

  await red.work();
  await yellow.work();
  await green.work();
  execute();
}

function Light(color, time) {
  this.color = color;
  this.interval = time;
}

Light.prototype.work = function() {
  return new Promise((resolve) =>  setTimeout(() => {
    light = this.color;
    resolve();
  }, this.interval));
}

execute();

/*******测试部分*******/
module.exports = async function doTest() {
  try {
    // execute();
    setTimeout(()=>console.log(1111, light), 50);
    setTimeout(()=>console.log(2222, light), 350);
    setTimeout(()=>console.log(3333,light), 550);
    // 此处写测试用例
    throw new Error('删除此行，补上你的测试用例');
  } catch (ex) {
    return "不通过";
  }
}
