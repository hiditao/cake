"use strict";

const { Service } = require("egg");


class HomeService extends Service {
    async index() {

        let result = await this.app.mysql.select("goods");
        console.log(result);
        if(result.length) {
            return {code: 0, msk: "ok", data: result};
        } else {
            return {code: -1, msk: "error", data: null};
        }
    }
}

module.exports = HomeService;
