const mongoUnit = require('mongo-unit');
const { connect, disconnect } = require('../../app/repository/connection');

module.exports.start = async () => {
  const mongoUrl = await mongoUnit.start();
  await connect(mongoUrl);
}

module.exports.stop = () => {
  disconnect();
  mongoUnit.drop();
}