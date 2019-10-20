const nock = require('nock');

module.exports.initializeNocks = () => {
  nock('http://myhost.co')
    .get('/api')
    .reply(200, {
      results: [{ name: 'Dominic' }],
    });
}

module.exports.stopNocks = async () => {
  await nock.cleanAll();
  await nock.enableNetConnect();
}