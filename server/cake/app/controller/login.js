'use strict';

const { Controller } = require("egg");

class LoginController extends Controller {
    async twoCode() {
        const { ctx } = this;

        let captcha = await ctx.service.login.twoCode();
        ctx.response.type = 'image/svg+xml';  // 返回的类型
        console.log(captcha)

        // let img = captcha.data;
        // let text = captcha.text;
        // ctx.body = `${img}<br><a href="javascript: window.location.reload();">${text}</a>`
        ctx.body = captcha; // 返回一张图片
    }
}

module.exports = LoginController;