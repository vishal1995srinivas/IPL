
function special_query(deliveries) 
{
    let totalruns = {};
    let vkohliruns = [];
    let vkohliRunsTotal = [];
    let vkohliDucks = [];
    let vkohli50s = [];

        for(count of deliveries)
        {
                if(count.batsman == "V Kohli")
                {
                    if(totalruns[count.match_id] == undefined)
                    {
                        totalruns[count.match_id] = new Array();
                        totalruns[count.match_id][0] = parseInt(count.batsman_runs);
                    }
                    if(totalruns.hasOwnProperty(count.match_id) == true)
                    {
                        totalruns[count.match_id][0] += parseInt(count.batsman_runs);
                    }
                }
        }
       
        for(matches in totalruns)
        {
            vkohliruns.push(totalruns[matches][0]);
        }
        console.log(vkohliruns.length);
        console.log("The runs of Virat Kohli are as follows",vkohliruns);
        vkohliRunsTotal = vkohliruns.reduce(myFunc);
        function myFunc(total, num) {
            return total + num;
          }
          vkohliAverage = (vkohliRunsTotal / vkohliruns.length).toFixed(2);
        console.log("Total runs of Virat Kohli are",vkohliRunsTotal+" with an average of "+vkohliAverage);

          vkohliDucks = vkohliruns.filter(checkDuck);
          function checkDuck(runs) {
            return runs == 0;
          }
          vkohli50s = vkohliruns.filter(check50);
          function check50(runs) {
            return runs >= 50;
          }
          console.log("Number of ducks of Virat Kohli are",vkohliDucks.length);
          console.log("Number of 50's of Virat Kohli are",vkohli50s.length);

}
module.exports = special_query;