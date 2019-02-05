const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const resultsFirstSchema = new Schema({
  name: String,
  email: String,
  password: String
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const ResultsFirst = mongoose.model('ResultsFirst', resultsFirstSchema);
module.exports = ResultsFirst;