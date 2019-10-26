const mongoose = require('mongoose');
const ContentSchema = require('../schemas/content.schema');

module.exports = mongoose.model('content', ContentSchema);