const path = require('path');
const express = require('express')

module.exports = (router) => {
  router.use('/static', express.static(path.join(__dirname, '../../build/static')));

  router.get('*', (req, res) => {
    console.log(req.url);
    res.sendFile(
      path.join(
        __dirname,
        '../../build/index.html'
      )
    );
  });
};
