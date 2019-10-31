const mongoose = require('mongoose');

const {
  Schema,
  Types
} = mongoose;

module.exports = new Schema({
  profileId: {
    // type: Types.ObjectId,
    type: String,
    unique: true,
    required: true
  },
  userName: {
    type: String,
    required: true
  },
  avatarUrl: {
    type: String,
    required: true
  },
  countryAlpha3Code: {
    type: String,
    required: true
  },
  goldMedal: {
    type: Number,
    required: true
  },
  silverMedal: {
    type: Number,
    required: true
  },
  bronzeMedal: {
    type: Number,
    required: true
  },
  ranking: {
    type: Number,
    index: true
  },
  rankingHistory: {
    type: Number
  }

}, {
  timestamps: true
});