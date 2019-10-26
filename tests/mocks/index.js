const mongoMock = require('./mongo.mock');
const nockMock = require('./nock.mock');

module.exports.startAll = async () => {
  await mongoMock.start();
  nockMock.start();
}

module.exports.stopAll = async () => {
  mongoMock.stop();
  await nockMock.stop();
}