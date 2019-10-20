
const mongoUnit = require('mongo-unit');
const testData = require('./data/test.data.json');

module.exports.initialize = async () => {
  const testMongoUrl = await mongoUnit.start();
  mongoUnit.initDb(testMongoUrl, testData);
}

module.exports.stop = () => {
  mongoUnit.drop();
}