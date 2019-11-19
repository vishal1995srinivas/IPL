const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");
CSVToJSON().fromFile("./matches.csv").then(matches => {
    const totalWinsOfAllTeams = require('./second_query');
    const totalNoOfMatchesPerYr = require('./first_query');
    totalWinsOfAllTeams(matches);
    totalNoOfMatchesPerYr(matches);
    CSVToJSON().fromFile("./deliveries.csv").then(deliveries => {
        const totalExtraRunsScoredByAllTeams = require('./third_query');
        const topEconomyBowlers2015 = require('./fourth_query');
        const topMaidenOverBowlers = require('./fifth_query');
        totalExtraRunsScoredByAllTeams(matches, deliveries);
        topEconomyBowlers2015(matches, deliveries);
        topMaidenOverBowlers(deliveries);
    });
});