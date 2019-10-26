const express = require('express');
const rp = require('request-promise');
const ContentService = require('../services/content.service');
// get an instance of the express Router
const routes = express.Router();

routes.get('/', async (req, res) => {
  // await rp.get('http://myhost.co/api');
  await ContentService.create('TEST');
  res.status(200)
    .json({
      message: 'Zoo'
    })
})
routes.get('/health-check', (req, res) => {
  res.json({ message: 'Local Authentication' });
});

module.exports = routes;