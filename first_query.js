//Query : Total number of matches played per year by all teams.
function first_query(matches) {
  let totalMatches = {};
  let season = matches.map(a => a.season);
  // console.log(season);
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
  console.log(
    "Total number of matches played per year as follows \n",
    totalMatches
  );
}
module.exports = first_query;
