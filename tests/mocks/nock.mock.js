const nock = require('nock');

module.exports.initialize = () => {
  nock('http://myhost.co')
    .get('/api')
    .reply(200, {
      results: [{ name: 'Dominic' }],
    });
}

module.exports.stop = async () => {
  await nock.cleanAll();
  await nock.enableNetConnect();
}