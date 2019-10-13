const express = require('express');
const bodyParser = require('body-parser');
// const { defaultMiddle } = require('./middlewares');
const { routes } = require('./routes');
const { connectDB } = require('./models');
const errorHandler = (err, req, res, next) => {
  res.status(500).json({
    message: 'Failed'
  });
}
const dbUri = 'mongodb://mongodb:27017/zooo';
connectDB(dbUri)
  .catch(err => {
    console.error('what is fail ', err)
  });
// module.exports.bootstrap = () => {

// }

const app = express();
// app.set('configuration', configuration);
// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }))
  .use(bodyParser.json())
  // .use(defaultMiddle) // MUST call before routes!
  .use(routes)
  .use(errorHandler); // Have to put this at the end!

// START THE SERVER
// =============================================================================
app.listen(3000);

module.exports = app;
