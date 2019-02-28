const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const Bet = require("../models/Bet");
const Results = require("../models/Results");

router.post("/new", (req, res, next) => {
  axios
    .get("https://www.mundodeportivo.com/servicios/quiniela")
    .then(response => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        let matchesList = [];
        $(".bg-name").each(function(i, element) {
          matchesList.push($(this).text());
        });

        Results.findOne(
          {},
          {},
          { sort: { updated_at: -1 } },
          (error, results) => {
            if (error) {
              next(error);
            } else {
              let matchday = results.matchday;
              let thisMatchday = matchday + 1;
              const apuestas = req.body.apuestas
                .sort((a, b) => a.index - b.index)
                .map(e => e.value);
              const newBet = new Bet({
                user: req.user,
                apuestas: apuestas,
                partidos: matchesList,
                matchday: thisMatchday
              });

              newBet
                .save()
                .then(bet => {
                  res.json({ bet });
                })
                .catch(err => {
                  res.json({ message: "Something went wrong" });
                });
            }
          }
        );
      }
    });
});

router.get("/userBet/:matchday/:user_id", (req, res, next) => {
  Bet.findOne({ matchday: req.params.matchday, user: req.params.user_id })
    .then(oneBet => {
      res.json(oneBet);
    })
    .catch(err => {
      res.json({ message: "Something went wrong" });
    });
});

module.exports = router;
