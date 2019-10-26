const { chai, expect } = require('../../utils');

const ContentService = require('../../../app/services/content.service');

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
            ContentService.find({
              name: 'TEST'
            })
              .then(data => {
                expect(data[0].name).to.be.equal('TEST');
                done();
              });
          });
      });
    })
  })
}

module.exports = apiDefaultTest;