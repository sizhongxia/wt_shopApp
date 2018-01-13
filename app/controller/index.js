const Controller = require('egg').Controller;

class IndexController extends Controller {
  async index2() {
    await this.ctx.render('index/index.html',{});
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