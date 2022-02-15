const path = require('path');

module.exports = (router) => {
  router.get('*', (req, res) => {
    res.sendFile(
      path.join(
        __dirname,
        `../../build/${req.url !== '/' ? req.url : 'index.html'}`
      )
    );
  });
};
