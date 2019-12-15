const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");
CSVToJSON()
  .fromFile("./matches.csv")
  .then(matches => {
    const totalWinsOfAllTeams = require("./TotalWinsOfAllTeams");
    const totalNoOfMatchesPerYr = require("./TotalNoOfMatchesPerYr");
    totalWinsOfAllTeams(matches);
    totalNoOfMatchesPerYr(matches);
    CSVToJSON()
      .fromFile("./deliveries.csv")
      .then(deliveries => {
        const totalExtraRunsScoredByAllTeams = require("./totalExtraRunsScoredByAllTeams");
        const topEconomyBowlers2015 = require("./topEconomyBowlers2015");
        const topMaidenOverBowlers = require("./TopMaidenBowlers");
        const BatsmanStatsUsingMapFilterReduce = require("./BatsmanStatsUsingMapFilterReduce");
        totalExtraRunsScoredByAllTeams(matches, deliveries);
        topEconomyBowlers2015(matches, deliveries);
        topMaidenOverBowlers(deliveries);
        BatsmanStatsUsingMapFilterReduce(deliveries, "V Kohli");
      });
  });
