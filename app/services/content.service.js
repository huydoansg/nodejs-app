const uuid = require('uuid');

const ContentModel = require('../repository/models/content.model');

const find = (query) => ContentModel.find(query);

const create = (name = 'make a test') => {
  const content = new ContentModel({
    contentId: uuid.v4(),
    language: 'vn',
    name,
    tags: [
      'test'
    ]
  });
  return content.save();
}

module.exports = {
  find,
  create
}