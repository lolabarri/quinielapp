const express = require("express");
const router = express.Router();
const Bet = require("../models/Bet");

router.post("/new", (req, res, next) => {
  const newBet = new Bet({
    user: req.user,
    bet1: req.body.bet1,
    bet2: req.body.bet2,
    bet3: req.body.bet3,
    bet4: req.body.bet4,
    bet5: req.body.bet5,
    bet6: req.body.bet6,
    bet7: req.body.bet7,
    bet8: req.body.bet8,
    bet9: req.body.bet9,
    bet10: req.body.bet10,
    bet11: req.body.bet11,
    bet12: req.body.bet12,
    bet13: req.body.bet13,
    bet14: req.body.bet14,
    bet15: req.body.bet15,
  });

  newBet.save()
    .then(bet => {
      res.json({bet})
    })
    .catch(err => {
      res.json({ message: "Something went wrong" })
    })
});

module.exports = router;