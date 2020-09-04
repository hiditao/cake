'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  // 分类查询
  router.get("/getbytype/:tid", controller.home.getByType);

  // 验证码
  router.get("/captcha", controller.login.twoCode);
  router.get("/message", controller.login.message)
};
