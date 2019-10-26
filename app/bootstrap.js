const { connect } = require('./repository/connection');
const server = require('./server');

const dbUri = process.env.MONGO_URL || 'mongodb://localhost:27017/zooo';

module.exports.bootstrap = async () => {
  try {
    await connect(dbUri);
    server.createServer();
  } catch (err) {
    console.error(`Something is wrong\nError message: ${err.message}`);
    console.error(err);
  }
}
