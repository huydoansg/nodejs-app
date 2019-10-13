const mongoose = require('mongoose');

// const options = {
//   useMongoClient: true,
//   autoIndex: false, // Don't build indexes
//   reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
//   reconnectInterval: 500, // Reconnect every 500ms
//   poolSize: 10, // Maintain up to 10 socket connections
//   // If not connected, return errors immediately rather than waiting for reconnect
//   bufferMaxEntries: 0
// };

const connectDB = (dbURI, options = {}) => {
  mongoose.Promise = global.Promise;

  return mongoose.connect(dbURI, options);
}

module.exports.connectDB = connectDB;