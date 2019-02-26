const express = require("express");
const router = express.Router();
const Bet = require("../models/Bet");

router.post("/new", (req, res, next) => {
  const apuestas = req.body.apuestas.sort((a,b) => a.index - b.index).map(e => e.value);
  const newBet = new Bet({
    user: req.user,
    apuestas: apuestas
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