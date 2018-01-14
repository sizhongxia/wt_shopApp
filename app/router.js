module.exports = app => {
  const { router, controller } = app;
  router.get('/index', controller.index.index);
  router.get('/login', controller.index.login);
  router.get('/regist', controller.index.reg);
  router.get('/ucenter', controller.index.ucenter);
};