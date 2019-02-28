const express = require("express");
const router = express.Router();
const User = require("../models/User");
const Bet = require("../models/Bet");
const Results = require("../models/Results");

// Obtiene el último array de resultados de Results
// router.get("/matchday", (req, res, next) => {
//   Results.findOne({}, {}, { sort: { updated_at: -1 } }, (error, results) => {
//     if (error) {
//       next(error);
//     } else {
//       let realResults = results.resultados;
//       let resultsId = results._id;
//       console.log(resultsId);
//     }
//   });
// });

router.get("/matchday", (req, res, next) => {
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
          console.log(usersArr);
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
          console.log(pointsArr);
        }
      });
    }
  });
});

// Obtiene un JSON con las apuestas de cada user, con ID de user y array de apuestas
router.get("/bet/:matchday", (req, res, next) => {
  Bet.find(
    { matchday: req.params.matchday },
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
router.get("/betOne/:matchday", (req, res, next) => {
  Bet.find(
    { matchday: req.params.matchday, user: req.user._id },
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

// router.get("/betOneTwo/matchday", (req, res, next) => {
//   Matchday.find({ matchday: req.params.matchday})
//   Bet.find(
//     { matchday: req.params.matchday_id, user: req.user },
//     "apuestas user -_id",
//     (error, bets) => {
//       if (error) {
//         next(error);
//       } else {
//         res.json(bets);
//       }
//     }
//   );
// });

module.exports = router;
