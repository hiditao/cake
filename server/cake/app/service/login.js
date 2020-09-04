'use strict';

const { Service } = require('egg');
const svgCaptcha = require('svg-captcha');

class LoginService extends Service {
    async twoCode() {

        const captcha = svgCaptcha.create({
            size: 4,
            fontSize: 40,
            width: 60,
            height: 30,
            ignoreChars: '0o1i',
            bacground: '#ccc',
            noise: 1
        });
        this.ctx.session.code = captcha.text;

        return captcha;
    }

    async message() {

        let r = Math.random().toString().substr(-6);
        
        console.log(r, typeof r)

        return {code: 0, msg: null, data: r};
    }
}

module.exports = LoginService;