process.env.NODE_ENV = 'test';

const mocks = require('../mocks');
const { createServer } = require('../../app/server');

const apiDefaultTest = require('./default');

describe("API Testing", () => {
  before(async () => {
    await mocks.startAll();
  })
  after(async () => {
    await mocks.stopAll();
  });
  context('Started testing APIs', () => {
    apiDefaultTest(createServer());
    // Other APIs will be here
  });
});