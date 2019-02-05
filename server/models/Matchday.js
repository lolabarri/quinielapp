const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const matchdaySchema = new Schema({
  match1: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match2: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match3: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match4: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match5: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match6: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match7: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match8: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match9: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match10: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match11: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match12: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match13: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match14: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  match15: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Matchday = mongoose.model('Matchday', matchdaySchema);
module.exports = Matchday;