/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1598587282952_6006';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  // 服务器配置信息
  config.cluster = {
    listen: {
      path: "",
      port: 8080,
      hostname: "localhost"  //上线改成0.0.0.0
    }
  }

  // 数据库配置
  config.mysql = {
    client: {
      host: "localhost",  //上线改成云服务器的内网地址
      user: "root",
      password: "root",
      port: 3306,
      database: "cake"
    }
  }

  // 跨域配置
  config.cors = {
    origin: "*",
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH'
  }

  //post请求的安全认证
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true
    }
  };

   //更改post请求体的大小
   config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb',
  };

  // 文件上传
  config.multipart = {
    mode: "file",  //默认是stream，file表示文件
    fileExtensions: [".txt", ".md", ".pdf"] //扩展可支持的文件
  }


  return {
    ...config,
    ...userConfig,
  };
};
