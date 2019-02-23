const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MatchdaySchema = new Schema(
  {
    matchday: Number,
    matches: [
      {
        type: String,
        required: true
      }
    ],
    resultados: [
      {
        type: String,
        required: true
      }
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);


const Matchday = mongoose.model('Matchday', MatchdaySchema);
module.exports = Matchday;