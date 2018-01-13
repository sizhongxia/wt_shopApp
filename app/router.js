module.exports = app => {
  const { router, controller } = app;
  router.get('/index', controller.index.index2);
  router.get('/login', controller.index.login);
  router.get('/regist', controller.index.reg);
};