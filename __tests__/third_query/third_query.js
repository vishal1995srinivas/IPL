//Query : Total Extra runs scored by all teams in season 2016.
/*let nomatch = [{}];
let onematch = [{ id: "1", season: "2016" }];
let manymatch = [
  { id: "1", season: "2016" },
  { id: "2", season: "2016" }
];
let nodelivery = [{}];
let onedelivery = [{ match_id: "2", bowling_team: "team3", extra_runs: "1" }];
let deliveries = [
  { match_id: "1", bowling_team: "team1", extra_runs: "2" },
  { match_id: "1", bowling_team: "team1", extra_runs: "1" },
  { match_id: "2", bowling_team: "team3", extra_runs: "1" }
];
*/
function third_query(matches, deliveries) {
  let matchIdsOf2016 = [];
  //rerurn matches[0].season;
  if (matches[0].season == undefined) {
    return "No Entry found. Please provide min 1 match / entry";
  } else {
    for (count of matches) {
      if (count.season == "2016") {
        matchIdsOf2016.push(count.id);
      }
    }
    if (matchIdsOf2016.length == 0) {
      return "No matches of 2016 present";
    } else {
      //return matchIdsOf2016.length);
      let extraRunsconceded = {};
      if (
        deliveries[0].match_id == undefined ||
        deliveries[0].bowling_team == undefined ||
        deliveries[0].extra_runs == undefined
      ) {
        return "Either match_id or bowling team or extra runs are absent in the entry.";
      } else {
        // return deliveries[0]);/*
        for (let i = 0; i < matchIdsOf2016.length; i++) {
          // return matchIdsOf2016[i];

          for (match of deliveries) {
            // return match.bowling_team);
            if (matchIdsOf2016[i] == match.match_id) {
              if (extraRunsconceded[match.bowling_team] == undefined) {
                extraRunsconceded[match.bowling_team] = new Array();
                extraRunsconceded[match.bowling_team][0] = 0;
              }
              if (
                extraRunsconceded.hasOwnProperty(match.bowling_team) == true
              ) {
                extraRunsconceded[match.bowling_team][0] += parseInt(
                  match.extra_runs
                );
              }
            }
          }
        }
        if (Object.keys(extraRunsconceded).length === 0) {
          return "No deliveries of MatchIDs 2016 present";
        } else {
          return extraRunsconceded;
        }
      }
    }
  }
}
module.exports = third_query;
