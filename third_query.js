function third_query(matches, deliveries)
{
    let match_id = [];
    for(count of matches)
    {
        if(count.season == '2016')
        {
            match_id.push(count.id);
        }
    }
   //console.log(match_id.length);
    let extra_runs = {};
   // console.log(deliveries[0]);/*
    for(let i = 0;i < match_id.length; i++ )
    {
      // console.log(match_id[i]);
        for(match of deliveries)
        {
           // console.log(match.bowling_team);
            if(match_id[i] == match.match_id)
            {
               
                if(extra_runs[match.bowling_team] == undefined)
                {
                    extra_runs[match.bowling_team] = new Array();
                    extra_runs[match.bowling_team][0] = 0;
                }
                if(extra_runs.hasOwnProperty(match.bowling_team)==true)
                {
                   extra_runs[match.bowling_team][0] += parseInt(match.extra_runs);  
                }
            }
        }
    }
    console.log("Total extra runs scored in the season 2016 by all teams are as follows \n",extra_runs);
 }
 module.exports = third_query;
