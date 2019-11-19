//Query : Total Extra runs scored by all teams in season 2016.
function third_query(matches, deliveries)
{
    let matchIdsOf2016 = [];
    for(count of matches)
    {
        if(count.season == '2016')
        {
            matchIdsOf2016.push(count.id);
        }
    }
   //console.log(matchIdsOf2016.length);
    let extraRunsconceded = {};
   // console.log(deliveries[0]);/*
    for(let i = 0;i < matchIdsOf2016.length; i++ )
    {
      // console.log(matchIdsOf2016[i]);
        for(match of deliveries)
        {
           // console.log(match.bowling_team);
            if(matchIdsOf2016[i] == match.match_id)
            {
               
                if(extraRunsconceded[match.bowling_team] == undefined)
                {
                    extraRunsconceded[match.bowling_team] = new Array();
                    extraRunsconceded[match.bowling_team][0] = 0;
                }
                if(extraRunsconceded.hasOwnProperty(match.bowling_team)==true)
                {
                   extraRunsconceded[match.bowling_team][0] += parseInt(match.extra_runs);  
                }
            }
        }
    }
    console.log("Total extra runs scored in the season 2016 by all teams are as follows \n",extraRunsconceded);
 }
 module.exports = third_query;
