"use strict";

const { Service } = require("egg");


class HomeService extends Service {
    async index() {

        let result = await this.app.mysql.select("goods");
        // console.log(result);
        if(result.length) {
            return {code: 0, msk: "ok", data: result};
        } else {
            return {code: -1, msk: "error", data: null};
        }
    }

    async getByType(tid) {
        // let result = {code: -1, msg: "error", data: null};
        if(tid == 0) {
            let res = await this.app.mysql.select("goods");
            if(res.length) {
                return  {code: 0, msk: "ok", data: res}
            } else {
                return {code: -1, msg: "error", data: null};
            }

        } else {
            let res = await this.app.mysql.select("goods", {
                where: {
                    tid: tid
                }
            })
            if(res.length) {
                return {code: 0, msk: "ok", data: res}
            } else {
                return {code: -1, msg: "error", data: null};

            }
        }

        // console.log(result)
        // return result;
    }
}

module.exports = HomeService;
