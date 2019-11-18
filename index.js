const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");
CSVToJSON().fromFile("./matches.csv").then(matches => {
    const no_of_wins = require('./second_query');
    const no_of_matches_per_yr = require('./first_query');
    no_of_wins(matches);
    no_of_matches_per_yr(matches);
    CSVToJSON().fromFile("./deliveries.csv").then(deliveries => {
        const extra_runs_scored_by_all_teams = require('./third_query');
        const top_economical_bowlers_2016 = require('./fourth_query');
        const top_maiden_overs_bowled_bowlers = require('./fifth_query');
        extra_runs_scored_by_all_teams(matches, deliveries);
        top_economical_bowlers_2016(matches, deliveries);
        top_maiden_overs_bowled_bowlers(deliveries);
    });
});