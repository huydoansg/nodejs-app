process.env.NODE_ENV = 'test';

// Import the dependencies for testing
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');
const nock = require('nock');
// Configure chai
chai.use(chaiHttp);
chai.should();

describe("Default", () => {
  before(() => {
    nock('http://myhost.co')
      .get('/api')
      .reply(200, {
        results: [{ name: 'Dominic' }],
      });
  })
  describe("GET /", () => {
    // Test to get all students record
    it("should get all students record", (done) => {
      chai.request(app)
        .get('/')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    // Test to get single student record
    // it("should get a single student record", (done) => {
    //   const id = 1;
    //   chai.request(app)
    //     .get(`/${id}`)
    //     .end((err, res) => {
    //       res.should.have.status(200);
    //       res.body.should.be.a('object');
    //       done();
    //     });
    // });

    // // Test to get single student record
    // it("should not get a single student record", (done) => {
    //   const id = 5;
    //   chai.request(app)
    //     .get(`/${id}`)
    //     .end((err, res) => {
    //       res.should.have.status(404);
    //       done();
    //     });
    // });
  });
});