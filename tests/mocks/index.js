const mongoMock = require('./mongo.mock');
const nockMock = require('./nock.mock');

module.exports.initializeAll = async () => {
  await mongoMock.initialize();
  nockMock.initialize();
}

module.exports.stopAll = async () => {
  mongoMock.stop();
  await nockMock.stop();
}