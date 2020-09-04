const assert = require('chai').assert;

const question = '实现一个简易版的微博，包含 client 和 server 两部分，并实现四个基础功能：关注、取关、发微博、获取用户微博列表';

// A 关注 B 后，A 和 B 就成为好友关系（即使 B 没有关注 A）
// 某个用户的微博列表，包含他本人和他所有好友的所有微博
// 数据存储在 server 端
// 具体执行逻辑，参见本题的测试部分

class WeiboClient {
  /**
   * @param { userId, server } options 
   */
  constructor(options) {
    this.userId = options.userId;
    this.server = options.server;
    this.server.register(this.userId);
  }

  // 关注指定用户
  follow(userId) {
    this.server.addFrend(this.userId, userId);
  }

  // 取关指定用户
  unfollow(userId) {
    this.server.removeFrend(this.userId, userId);
  }

  // 发微博
  postNewWeibo(content) {
    this.server.addContend(this.userId, content);
  }

}

class WeiboServer {
  constructor() {
    this.data = {};
  }

  // 获取对应用户微博列表
  getWeiboList(userId) {
    var result = [...this.data[userId].contentsList];
    var len = this.getWeiboFrendsList(userId).length;
    for(let i =0; i < len; i++) {
      result = result.concat(this.data[this.getWeiboFrendsList(userId)[i]].contentsList);
    }
    return result;
  }

  getCurrnetList(userId) {

  }

  getWeiboFrendsList(userId) {
    return this.data[userId].frendsList;
  }

  addFrend(userId, frendUserId) {
    if (this.data[userId].frendsList.indexOf(frendUserId)<0) {
      this.data[userId].frendsList.push(frendUserId);
    }
  }

  removeFrend(userId, frendUserId) {
    this.data[userId].frendsList.splice(this.data[userId].frendsList.indexOf(frendUserId), 1);
  }

  addContend(userId, content) {
    this.data[userId].contentsList.push(content);
  }

  register(userId) {
    this.data[userId] = {
      frendsList: [],
      contentsList: [],
    }
  }
}

/*******测试部分*******/
module.exports = function doTest() {
  try {
    const wServer = new WeiboServer();
    const wClientA = new WeiboClient({
      userId: '001',
      server: wServer,
    });
    const wClientB = new WeiboClient({
      userId: '002',
      server: wServer,
    });
    const wClientC = new WeiboClient({
      userId: '003',
      server: wServer,
    });
    
    const WEIBO_CONTENT_A = 'Hello World';
    const WEIBO_CONTENT_B = '大家好，我是user 002';
    const WEIBO_CONTENT_C = '小程序怎么写？';
    wClientA.postNewWeibo(WEIBO_CONTENT_A);
    wClientB.postNewWeibo(WEIBO_CONTENT_B);
    wClientC.postNewWeibo(WEIBO_CONTENT_C);

    assert.deepEqual(wServer.getWeiboList('001'), [WEIBO_CONTENT_A]);

    wClientA.follow('002');
    assert.deepEqual(wServer.getWeiboList('001'), [WEIBO_CONTENT_A, WEIBO_CONTENT_B]);

    wClientA.follow('003');
    assert.deepEqual(wServer.getWeiboList('001'), [WEIBO_CONTENT_A, WEIBO_CONTENT_B, WEIBO_CONTENT_C]);

    wClientA.unfollow('002');
    assert.deepEqual(wServer.getWeiboList('001'), [WEIBO_CONTENT_A, WEIBO_CONTENT_C]);

    return "通过";
  } catch (ex) {
    console.log(ex);
    return "不通过";
  }
}