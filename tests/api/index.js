process.env.NODE_ENV = 'test';

const { initializeNocks, stopNocks } = require('../mocks/api.mock');
const server = require('../../app');
const apiDefaultTest = require('./default');

describe("API Testing", () => {
  before(() => {
    initializeNocks();
  })
  after(async () => {
    // await mongoose.disconnect();
    await stopNocks();
  });
  context('Started testing APIs', () => {
    apiDefaultTest(server);
    // Other APIs will be here
  });
});