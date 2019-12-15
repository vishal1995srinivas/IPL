// Query : To get number of matches won by all teams over all these years of IPL 
function second_query(matches) {
  let matchesWonByAllTeams = {};
  let winner = matches.map(a => a.winner);
  // console.log(result);
  for (let i = 0; i < winner.length; i++) {
    if (winner[i].length == 0) {
      winner[i] = "No Result";
    }
    if (matchesWonByAllTeams[winner[i]] == undefined) {
      matchesWonByAllTeams[winner[i]] = new Array();
      matchesWonByAllTeams[winner[i]][0] = 0;
      // matchesWonByAllTeams[result[i]].push(1);
    }
    if (matchesWonByAllTeams.hasOwnProperty(winner[i]) == true) {
      matchesWonByAllTeams[winner[i]][0] += 1;
    }
  }
  console.log(
    "The number of matches won of all teams over all the years of IPL are as follows \n",
    matchesWonByAllTeams
  );
}

module.exports = second_query;
