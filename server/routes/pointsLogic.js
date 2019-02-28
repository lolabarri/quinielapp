const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Bet = require("../models/Bet");
const Results = require("../models/Results");

router.get("/matchday", (next) => {
  Results.findOne({}, {}, { sort: { updated_at: -1 } }, (error, results) => {
    if (error) {
      next(error);
    } else {
      let realResults = results.resultados.slice(0, -1);
      let matchday = results.matchday;

      Bet.find({ matchday: matchday }, (error, bets) => {
        if (error) {
          next(error);
        } else {
          let usersArr = [];
          bets.forEach(({ user }) => {
            usersArr.push(user);
          });
          let apuestasArr = [];
          bets.forEach(({ apuestas }) => {
            let apuestasEnt = apuestas.slice(1, -1);
            apuestasArr.push(apuestasEnt);
          });
          let pointsArr = [];
          apuestasArr.forEach(e => {
            let length = Math.min(e.length, realResults.length);
            let correctResults = 0;
            for (var index = 0; index < length; index++) {
              if (e[index] == realResults[index]) {
                correctResults++;
              }
            }
            pointsArr.push(correctResults);
          });
          usersArr.forEach(e => {
            User.findById(e, (error, user) => {
              let j = usersArr.indexOf(e);
                  let currentPoints = user.points;
                  let newPoints = pointsArr[j];
                  let totalPoints = currentPoints + newPoints;
              if (error) {
                next(error);
              } else { 
                user.points = totalPoints;
                  user.save();
              }
            });
          });
        }
      });
    }
  });
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
  User.findOne({ user: req.user }, (error, user) => {
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

module.exports = router;
