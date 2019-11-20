// Query : To get number of matches won by all teams over all these years of IPL 
function second_query(matches) {
  let matchesWonByAllTeams = {};
  if (matches[0].winner == undefined)
  {
    return "Empty entries provided. Please provide min 1 entry";
  }
  else
  {
  let winner = matches.map(a => a.winner);
  // console.log(result);
  for (let i = 0; i < winner.length; i++)
  {
    if (winner[i].length == 0)
    {
      winner[i] = "No Result";
    }
      if (matchesWonByAllTeams[winner[i]] == undefined)
      {
        matchesWonByAllTeams[winner[i]] = new Array();
        matchesWonByAllTeams[winner[i]][0] = 0;
        // matchesWonByAllTeams[result[i]].push(1);
      }
      if (matchesWonByAllTeams.hasOwnProperty(winner[i]) == true)
      {
        matchesWonByAllTeams[winner[i]][0] += 1;
      }
  }
  return matchesWonByAllTeams;
  }
}
//second_query(singleEntry);
//second_query(matches);
//second_query(twosameEntry);
//second_query(emptyObject);
module.exports = second_query;
