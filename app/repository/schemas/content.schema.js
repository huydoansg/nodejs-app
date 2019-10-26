const { Schema } = require('mongoose');

const Types = Schema.Types;

module.exports = new Schema({
  contentId: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  language: {
    type: String,
    required: true,
    trim: true,
    default: "vn"
  },

  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 250
  },

  description: {
    type: String,
    trim: true,
    maxlength: 250
  },

  tags: [
    {
      type: String,
      trim: true,
      lowercase: true,
      minlength: 1,
      maxlength: 250
    }
  ],

  settings: Types.Mixed,

  version: { type: Types.Number, default: 1 },

  deleted: { type: Types.Boolean, default: false },

}, {
  timestamps: true
});
