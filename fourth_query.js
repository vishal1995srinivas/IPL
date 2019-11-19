// Query : To get top economical bowlers in the year 2015 with their economy rate.
/*Approach :
1. Get the match IDs of 2015 from matches.csv file and store in matchIDs2015 array.
2. Create a Total runs by bowler object.
3. Create separate bowler name array with total runs and total deliveries and store inside total runs by bowler object.Do not neglect wide balls and no balls
4. Calculate economy rate of all the bowlers = (total runs / total deliveries) * 6 and round it off to 2 decimal places.
5. Create sort array and store all the economy rates in it and sort it in ascending order 
6. Match with the bowler name and push to the EconomyRatesOfBowlers object and display it.
*/
function fourth_query(matches, deliveries_2015) {
  let matchIds2015 = [];
  for (count of matches) {
    if (count.season == "2015") {
      matchIds2015.push(count.id);
    }
  }
  //Now we got match ids of 2015 by above for loop----------------------------------------------------

  let totalRunsByBowler = {};
  // console.log(deliveries[0]);/*
  for (let i = 0; i < matchIds2015.length; i++) {
    // console.log(match_id[i]);
    for (match of deliveries_2015) {
      // console.log(match.bowling_team);
      if (matchIds2015[i] == match.match_id) {
        if (totalRunsByBowler[match.bowler] == undefined) {
          totalRunsByBowler[match.bowler] = new Array();
          totalRunsByBowler[match.bowler][0] = 0;
          totalRunsByBowler[match.bowler][1] = 0;
        }
        if (totalRunsByBowler.hasOwnProperty(match.bowler) == true) {
          totalRunsByBowler[match.bowler][0] += parseInt(match.total_runs); // no of runs
          totalRunsByBowler[match.bowler][1] += 1; // no of deliveries
          if (match.wide_runs > 0 || match.noball_runs > 0) {
            totalRunsByBowler[match.bowler][1] -= 1;
          }
        }
      }
    }
  }
  //console.log(totalRunsByBowler);
  //Matched 2015 match-ids in deiveries.csv and we got 'bowler name': [total runs , total delveries]-------------------
  let sort = [];
  let economyRatesOfBowlers = {};
  //Getting economy rate and deleting deliveries from respected bowler name array in totalRunsByBowler object. ---------------------------------------------
  for (key in totalRunsByBowler) {
    totalRunsByBowler[key][0] = (
      (totalRunsByBowler[key][0] / totalRunsByBowler[key][1]) *
      6
    ).toFixed(2);
    totalRunsByBowler[key].pop();
    sort.push(totalRunsByBowler[key][0]);
  }
  sort.sort(function(a, b) {
    return a - b;
  });

  //Matching bowler(key) with economyRatesOfBowlers rate------------------------------------------------------------------

  for (let i = 0; i < sort.length; i++) {
    for (key in totalRunsByBowler) {
      if (sort[i] == totalRunsByBowler[key][0]) {
        economyRatesOfBowlers[key] = new Array();
        economyRatesOfBowlers[key].push(sort[i]);
      }
    }
  }
  console.log(
    "Top economical bowlers of 2015 with their economy rate are as follows \n",
    economyRatesOfBowlers
  );
  //----------------------------Finally done-------------------------------------------------------------------
}
module.exports = fourth_query;
