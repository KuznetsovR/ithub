const path = require('path');
const express = require('express');

module.exports = (router) => {
  router.use('/static', express.static(path.join(__dirname, '../../build/static')));

  router.get('/', (req, res) => {
      res.sendFile(path.join(__dirname, '../../build/index.html'));
  });
  router.get('/commission', (req, res) => {
      res.sendFile(path.join(__dirname, '../../build/commission/index.html'));
  });
  router.get('/courses', (req, res) => {
      res.sendFile(path.join(__dirname, '../../build/courses/index.html'));
  });
};
