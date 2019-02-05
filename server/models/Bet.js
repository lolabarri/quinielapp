const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    matchday: { type: Schema.Types.ObjectId, ref: "Matchday" },
    bet1: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet2: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet3: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet4: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet5: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet6: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet7: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet8: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet9: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet10: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet11: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet12: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet13: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet14: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
    bet15: {
      type: String,
      enum: ["Home Team", "Away Team", "Draw"],
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at"
    }
  }
);

const Bet = mongoose.model("Bet", betSchema);
module.exports = Bet;