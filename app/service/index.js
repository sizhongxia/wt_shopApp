const Service = require('egg').Service;

class IndexService extends Service {
  async login(username, password) {

    // console.info(username, password);
    // const { data: data } = await this.ctx.curl(`http://apis.juhe.cn/ip/ip2addr`, {
    //   data: {
    //     username: '${username}',
    //     password: '${password}'
    //   },
    //   dataType: 'json',
    // });
    // console.info(data);



    // return data;

    return {
      "code": 11,
      "msg": "asdasda"
    };
  }
}

module.exports = IndexService;