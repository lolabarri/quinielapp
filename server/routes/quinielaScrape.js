const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");
const Matchday = require("../models/Matchday");

router.get("/quiniela", (req, res) => {
  axios.get("https://www.loteriasyapuestas.es/es/la-quiniela").then(
    response => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        let matchesList = [];
        let resultsList = [];
        $("ul.puntosSusp li").each(function(i, element) {
          matchesList[i] = {
            match: $(this).text()
          };
        });
        $("ul.fondoGrisClaro li").each(function(i, element) {
          resultsList[i] = {
            result: $(this).text()
          };
        });
        let results = [];
        let result = {};
        matchesList.map((e, i) => {
          result.match = e.match;
          result.finalResult = resultsList[i].result;
          results.push({ ...result });
        });
        res.json({ results: results });
      }
    },
    err => console.log(err)
  );
});

router.post("/results", (req, res, next) => {
  axios.get("https://www.loteriasyapuestas.es/es/la-quiniela").then(
    response => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        let resultsList = [];
        $("ul.fondoGrisClaro li").each(function(i, element) {
          resultsList.push($(this).text())
        });
        const newMatchday = new Matchday({
          resultados: resultsList
        });
      
        newMatchday.save()
          .then(matchday => {
            res.json({matchday})
          })
          .catch(err => {
            res.json({ message: "Something went wrong" })
          })
      }
    },
    err => console.log(err)
  );
});

router.get("/apuesta", (req, res) => {
  axios.get("https://www.mundodeportivo.com/servicios/quiniela").then(
    response => {
      if (response.status === 200) {
        const html = response.data;
        const $ = cheerio.load(html);
        let matchesList = [];
        $(".bg-name").each(function(i, element) {
          matchesList[i] = {
            match: $(this).text()
          };
        });
        let numbersList = [
          { number: 1 },
          { number: 2 },
          { number: 3 },
          { number: 4 },
          { number: 5 },
          { number: 6 },
          { number: 7 },
          { number: 8 },
          { number: 9 },
          { number: 10 },
          { number: 11 },
          { number: 12 },
          { number: 13 },
          { number: 14 },
          { number: 15 },
          { number: 16 }
        ];
        let namesList = [
          { name: "bet1" },
          { name: "bet2" },
          { name: "bet3" },
          { name: "bet4" },
          { name: "bet5" },
          { name: "bet6" },
          { name: "bet7" },
          { name: "bet8" },
          { name: "bet9" },
          { name: "bet10" },
          { name: "bet11" },
          { name: "bet12" },
          { name: "bet13" },
          { name: "bet14" },
          { name: "bet15" },
          { name: "bet16" }
        ];

        let bets = [];
        let number = {};
        matchesList.map((e, i) => {
          number.match = e.match;
          number.number = numbersList[i].number;
          number.name = namesList[i].name;
          bets.push({ ...number });
        });
        res.json({ bets: bets });
      }
    },
    err => console.log(err)
  );
});

module.exports = router;
