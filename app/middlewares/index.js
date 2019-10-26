// const ContentService = require('../services/content.service');

module.exports.defaultMiddle = (req, res, next) => {
  // ContentService.create();
  next();
}