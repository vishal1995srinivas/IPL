function special_query(deliveries, batsmanName) {
  let totalMatches = {};
  let runs = [];
  let RunsTotal = [];
  let Ducks = [];
  let NumberOf50s = [];
  for (count of deliveries) {
    if (count.batsman == `${batsmanName}`) {
      if (totalMatches[count.match_id] == undefined) {
        totalMatches[count.match_id] = new Array();
        totalMatches[count.match_id][0] = parseInt(count.batsman_runs);
      }
      if (totalMatches.hasOwnProperty(count.match_id) == true) {
        totalMatches[count.match_id][0] += parseInt(count.batsman_runs);
      }
    }
  }
  for (matches in totalMatches) {
    runs.push(totalMatches[matches][0]);
  }
  console.log(runs.length);
  console.log(`The runs of ${batsmanName} are as follows`, runs);
  RunsTotal = runs.reduce(myFunc);
  function myFunc(total, num) {
    return total + num;
  }
  AverageRuns = (RunsTotal / runs.length).toFixed(2);
  console.log(
    `Total runs of ${batsmanName} are`,
    RunsTotal + " with an average of " + AverageRuns
  );

  Ducks = runs.filter(checkDuck);
  function checkDuck(runs) {
    return runs == 0;
  }
  NumberOf50s = runs.filter(check50);
  function check50(runs) {
    return runs >= 50;
  }
  console.log(`Number of ducks of ${batsmanName} are`, Ducks.length);
  console.log(`Number of 50's of ${batsmanName} are`, NumberOf50s.length);
}

module.exports = special_query;
