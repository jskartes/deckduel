const { Schema, model } = require('mongoose');

const gameZoneSchema = new Schema({
  name: String,
  isPublic: Boolean,
  cards: {
    type: [Schema.Types.ObjectId],
    ref: 'Card'
  }
}, {
  timestamps: true
});

const playerSchema = new Schema ({
  player: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  deck: {
    type: [Schema.Types.ObjectId],
    ref: 'Card'
  },
  health: {
    type: Number,
    default: 20
  },
  zones: {
    type: [gameZoneSchema],
    default: [
      {name: 'Deck', isPublic: false},
      {name: 'Hand', isPublic: false},
      {name: 'Discard', isPublic: true},
      {name: 'Field', isPublic: true}
    ]
  }
}, {
  timestamps: true
});

const gameSchema = new Schema({
  isInProgress: {
    type: Boolean,
    default: true
  },
  players: [playerSchema],
  ruleSet: {},
}, {
  timestamps: true
});

module.exports = model('Game', gameSchema);
