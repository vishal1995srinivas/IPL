//Query : Total number of matches played per year by all teams.
function first_query(matches) {
  let totalMatches = {};
  if (matches[0].season == undefined) {
    return "Empty entries provided. Please provide min 1 entry";
  } else {
    let season = matches.map(a => a.season);
    for (let i = 0; i < season.length; i++) {
      if (totalMatches[season[i]] == undefined) {
        totalMatches[season[i]] = new Array();
        totalMatches[season[i]][0] = 0;
        // output[season[i]].push(1);
      }
      if (totalMatches.hasOwnProperty(season[i]) == true) {
        totalMatches[season[i]][0] += 1;
      }
    }
    return totalMatches;
  }
}
//console.log(first_query(matches));
//console.log(first_query(emptyObject));
module.exports = first_query;
