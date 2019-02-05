const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const resultsSecondSchema = new Schema({
  name: String,
  email: String,
  password: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const ResultsSecond = mongoose.model('ResultsSecond', resultsSecondSchema);
module.exports = ResultsSecond;