'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;

    let result = await ctx.service.home.index();

    console.log(typeof result)

    ctx.body = result;
  }
}

module.exports = HomeController;
