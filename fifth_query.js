/*
Query : Bowlers with most number of maidens.
Approach : 
1. Create a bowlerlog object and create a dummy key with values [0,0] in it.
2. First bowler replaces the dummy key in the bowlerlog object.
3. Log total runs of bowler in first value of his array and increment second value as this indicates number of deliveries.
4. If number of deliveries == 6. Check the total runs, if it is zero, store the bowler name in maidenOverBowlers object, if it is repeated increment the value.
5. Pass all the values into sort array and perform descending sort as we should get highest maiden overs bowled bowlers on top.
6. Match with the bowler name and display the object.
*/

function fifth_query(throws) {
  let maidenOverBowlers = {};
  let bowlerlog = {
    // bowlerlog is to keep track of bowler name with his total runs and deliveries to check a particular bowler is a maidenOverBowler or not.
    first: [0, 0]
  };
  for (match of throws) {
    if (Object.keys(bowlerlog)[0] == "first") {
      bowlerlog[match.bowler] = bowlerlog[Object.keys(bowlerlog)[0]];
      delete bowlerlog[Object.keys(bowlerlog)[0]];
    }
    if (bowlerlog.hasOwnProperty(match.bowler) == true) {
      bowlerlog[match.bowler][0] += parseInt(match.total_runs);
      bowlerlog[match.bowler][1] += 1;
      //console.log(bowlerlog);
      if (bowlerlog[match.bowler][1] == 6) {
        if (bowlerlog[match.bowler][0] == 0) {
          if (maidenOverBowlers[match.bowler] == undefined) {
            // console.log(match.bowler);
            //
            maidenOverBowlers[match.bowler] = new Array();
            maidenOverBowlers[match.bowler][0] = 0;
          }
          if (maidenOverBowlers.hasOwnProperty(match.bowler) == true) {
            //console.log(match.bowler);
            maidenOverBowlers[match.bowler][0] += 1;
          }
        }
      }
    }
    if (bowlerlog.hasOwnProperty(match.bowler) == false) {
      bowlerlog[match.bowler] = bowlerlog[Object.keys(bowlerlog)[0]];
      delete bowlerlog[Object.keys(bowlerlog)[0]];
      // bowlerlog[match.bowler][0] = 0;
      bowlerlog[match.bowler][0] = parseInt(match.total_runs);
      bowlerlog[match.bowler][1] = 1;
    }
  }
  let sort = [];
  let topMaidenBowlers = {};
  // ---------------------------------------------
  for (key in maidenOverBowlers) {
    sort.push(maidenOverBowlers[key][0]);
  }
  sort.sort(function(a, b) {
    return b - a;
  });
  //Matching bowler(key) with maiden values------------------------------------------------------------------
  for (let i = 0; i < sort.length; i++) {
    for (key in maidenOverBowlers) {
      if (sort[i] == maidenOverBowlers[key][0]) {
        topMaidenBowlers[key] = new Array();
        topMaidenBowlers[key].push(sort[i]);
      }
    }
  }
  console.log("Top bowlers of most number of maiden overs\n", topMaidenBowlers);
}
module.exports = fifth_query;
