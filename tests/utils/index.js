const chai = require('chai');
const chaiHttp = require('chai-http');

// Configure chai
const { expect } = chai;
chai.use(chaiHttp);
chai.should();

module.exports = {
  chai,
  expect
}