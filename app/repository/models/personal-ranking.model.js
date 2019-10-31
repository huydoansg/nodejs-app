const mongoose = require('mongoose');
const PersonalRanking = require('../schemas/personal-ranking.schema');

module.exports = mongoose.model('PersonalRanking', PersonalRanking);