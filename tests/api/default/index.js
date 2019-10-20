const { chai, expect } = require('../../utils');

const apiDefaultTest = server => {
  describe('Default API', () => {
    context('Happy cases', () => {
      it("Default API should return successfully!", done => {
        chai.request(server)
          .get('/')
          .end((err, res) => {
            expect(res).to.have.status(200);
            res.should.have.status(200);
            res.body.should.be.a('object');
            done();
          });
      });
    })
  })
}

module.exports = apiDefaultTest;