const express = require('express');
const rp = require('request-promise');
// get an instance of the express Router
const routes = express.Router();

routes.get('/', async (req, res) => {
  await rp.get('http://myhost.co/api');
  res.status(200)
    .json({
      message: 'Zoo'
    })
})
routes.get('/local', (req, res) => {
  res.json({ msg: 'Local Authentication' });
});

exports.routes = routes;