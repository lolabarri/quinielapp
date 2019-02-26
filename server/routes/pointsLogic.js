const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Bet = require("../models/Bet");
const Matchday = require("../models/Matchday");

// Obtiene el array de resultados de Matchday
router.get("/matchday/:matchday", (req, res, next) => {
  Matchday.findOne(
    { matchday: req.params.matchday },
    "resultados -_id",
    (error, matchday) => {
      if (error) {
        next(error);
      } else {
        res.json(matchday.resultados);
      }
    }
  );
});

// Obtiene un JSON con las apuestas de cada user, con ID de user y array de apuestas
router.get("/bet/:matchday_id", (req, res, next) => {
  Bet.find(
    { matchday: req.params.matchday_id },
    "apuestas user -_id",
    (error, bets) => {
      if (error) {
        next(error);
      } else {
        res.json(bets);
      }
    }
  );
});

// Obtiene el array de apuestas del usuario que esta logueado, para un matchday concreto
router.get("/betOne/:matchday_id", (req, res, next) => {
  Bet.find(
    { matchday: req.params.matchday_id, user: req.user },
    "apuestas user -_id",
    (error, bets) => {
      if (error) {
        next(error);
      } else {
        res.json(bets);
      }
    }
  );
});

//Actualiza el número de puntos de un user en función de su user ID
router.post("/updatePoints/:user_id", (req, res, next) => {
  User.findById(req.params.user_id, (error, user) => {
    if (error) {
      next(error);
    } else {
      user.points = 15;
      user.save((error, points) => {
        if (error) {
          next(error);
        } else {
          res.json({ points });
        }
      });
    }
  });
});

// Actualiza el número de puntos del user actual
router.post("/updatePoints", (req, res, next) => {
  User.findOne({user: req.user }, (error, user) => {
    if (error) {
      next(error);
    } else {
      req.user.points = 15;
      req.user.save((error, points) => {
        if (error) {
          next(error);
        } else {
          res.json({ points });
        }
      });
    }
  });
});

router.get("/betOneTwo/matchday", (req, res, next) => {
  Matchday.find({ matchday: req.params.matchday})
  Bet.find(
    { matchday: req.params.matchday_id, user: req.user },
    "apuestas user -_id",
    (error, bets) => {
      if (error) {
        next(error);
      } else {
        res.json(bets);
      }
    }
  );
});

module.exports = router;
