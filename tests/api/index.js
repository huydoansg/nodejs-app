process.env.NODE_ENV = 'test';

const mocks = require('../mocks');
const server = require('../../app');
const apiDefaultTest = require('./default');

describe("API Testing", () => {
  before(async () => {
    await mocks.initializeAll();
  })
  after(async () => {
    await mocks.stopAll();
  });
  context('Started testing APIs', () => {
    apiDefaultTest(server);
    // Other APIs will be here
  });
});