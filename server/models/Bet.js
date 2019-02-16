const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const betSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    matchday: { type: Schema.Types.ObjectId, ref: "Matchday" },
    apuestas: [{
      type: String,
      required: true
    }],
    
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