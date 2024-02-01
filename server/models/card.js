const { Schema, model } = require('mongoose');

const cardSchema = new Schema({
  name: String,
  cost: Number,
  art: String,
  cardType: String,
  text: String,
  strength: Number,
  defense: Number
}, {
  timestamps: true
});

module.exports = model('Card', cardSchema);
