const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index() {

    // const dataList = {
    //   mBannerList: [
    //     { id: 1, title: '活动1', url: '/login',src:'http://www.boncake.com.cn/public/images/59/44/c6/c3e35ac303b08d0389ee2aa385c75d976aecff7c.jpg?1515658334#w' },
    //     { id: 2, title: '活动2', url: '/regist',src:'http://www.boncake.com.cn/public/images/24/fd/89/1a1dab9e529a25e4287479563522c8371ed57570.jpg?1513952879#w' },
    //     { id: 2, title: '活动3', url: '/regist',src:'http://www.boncake.com.cn/public/images/9b/47/01/c70806dc5b4a02c7fa30a2877f5333a0d45aa5ee.jpg?1501039048#w' },
    //     { id: 2, title: '活动4', url: '/regist',src:'http://www.boncake.com.cn/public/images/92/c3/a8/0055d7ec566562b8472b9637b1bbae38de88b477.jpg?1515166438#w' }
    //   ]
    // };

    const data = await this.ctx.service.index.getmBannerList();

    await this.ctx.render('index/index.html',{mBannerList:data.list});
  }

  async login() {

  	const data = await this.ctx.service.index.login('wt0', '123');

  	console.info(data);

    await this.ctx.render('index/login.html',{});
  }
  async reg() {

    await this.ctx.render('index/regist.html',{});
  }
  async ucenter() {

    await this.ctx.render('index/ucenter.html',{});
  }
}

module.exports = IndexController;