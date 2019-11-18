function fourth_query(matches, deliveries_2015)
{
    let match_id_2015 = [];
    for(count of matches)
    {
        if(count.season == '2015')
        {
            match_id_2015.push(count.id);
        }
    }
   //Now we got match ids of 2015 by above for loop----------------------------------------------------
   
    let total_runs = {};
   // console.log(deliveries[0]);/*
    for(let i = 0;i < match_id_2015.length; i++ )
    {
      // console.log(match_id[i]);
        for(match of deliveries_2015)
        {
           // console.log(match.bowling_team);
            if(match_id_2015[i] == match.match_id)
            {
               
                if(total_runs[match.bowler] == undefined)
                {
                    total_runs[match.bowler] = new Array();
                    total_runs[match.bowler][0] = 0;
                    total_runs[match.bowler][1] = 0;
                }
                if(total_runs.hasOwnProperty(match.bowler)==true)
                {
                   
                   total_runs[match.bowler][0] += parseInt(match.total_runs); // no of runs
                   total_runs[match.bowler][1] += 1; // no of deliveries
                   if(match.wide_runs > 0 || match.noball_runs > 0)
                   {
                       total_runs[match.bowler][1] -=1;

                   }
                    

                }
            }
        }

    }
   //console.log(total_runs);
    //Matched 2015 match-ids in deiveries.csv and we got 'bowler name': [total runs , total delveries]-------------------
    let sort = [];
    let economy = {};
    //Getting economy rate and popping out balls!!!!!! ---------------------------------------------
    for(key in total_runs)
    {
      total_runs[key][0] = (( total_runs[key][0] / total_runs[key][1] ) * 6).toFixed(2);
      total_runs[key].pop();
      sort.push(total_runs[key][0]);
    }
    sort.sort(function(a, b){return a-b});
   
   //Matching bowler(key) with economy rate------------------------------------------------------------------
  
    for(let i=0;i<sort.length;i++)
    {
        for(key in total_runs)
        {
           if(sort[i] == total_runs[key][0])
           {
               economy[key] = new Array();
               economy[key].push(sort[i]);
           } 
       }
    }
    console.log("Top economical bowlers of 2015 with their economy rate are as follows \n",economy);
//----------------------------Finally done-------------------------------------------------------------------

 }
 module.exports = fourth_query;