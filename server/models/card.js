const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  name: String,
  art: URL,
  attributes: {}
}, {
  timestamps: true
});

module.exports = model('Card', cardSchema);
