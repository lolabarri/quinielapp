const express = require("express");
const router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

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
        res.json({results:results});
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

        res.json({matches:matchesList});
      }
    },
    err => console.log(err)
  );
});

module.exports = router;
