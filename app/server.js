const express = require('express');
const bodyParser = require('body-parser');
const { defaultMiddle } = require('./middlewares');
const routes = require('./routes');

const errorHandler = (err, req, res, next) => {
  console.error(`what the error is:\n ${err.message}`);
  console.debug(err);

  res.status(500).json({
    message: 'Failed'
  });
}
const port = process.env.PORT || 3000;

module.exports.createServer = () => {
  const app = express();
  // app.set('configuration', configuration);
  // configure app to use bodyParser()
  // this will let us get the data from a POST
  app.use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(defaultMiddle) // MUST call before routes!
    .use(routes)
    .use(errorHandler); // Have to put this at the end!

  // START THE SERVER
  // ================
  app.listen(port);
  return app;
}
