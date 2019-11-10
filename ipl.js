/*

1. the number of matches played per year of all the years in IPL. - completed
2. the number of matches won of all teams over all the years of IPL. - completed
3. extra runs conceded per team in 2016.- completed 
4. the top economical bowlers in 2015 - to be done tomo 
5. Discuss a "Story" you want to tell with the given data. i.e. write a query of your own and find an interesting statistic-  to be done tomo
*/

const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");
/******Second query solution  - verified **************************************************************/
CSVToJSON().fromFile("./matches.csv").then(matches => {
   // console.log(source);
   let output = {};
    let result1 = matches.map(a => a.winner);
   // console.log(result);
    for(let i=0;i<result1.length;i++)
    {   
        if(result1[i].length == 0)
        {
            result1[i] = 'No Result';
        }
        if(output[result1[i]]==undefined)
        {
            output[result1[i]] = new Array();
            output[result1[i]][0] = 0;
           // output[result[i]].push(1);
        }
        if(output.hasOwnProperty(result1[i])==true)
        {
            output[result1[i]][0] += 1; 
        }

    }
    console.log("The number of matches won of all teams over all the years of IPL are as follows \n",output);

});
/******************First query solution - verified**************************************************/
CSVToJSON().fromFile("./matches.csv").then(matches => {
    // console.log(source);
    let output_2 = {};
     let result = matches.map(a => a.season);
    // console.log(result);
     for(let i=0;i<result.length;i++)
     {   
         
         if(output_2[result[i]]==undefined)
         {
             output_2[result[i]] = new Array();
             output_2[result[i]][0] = 0;
            // output[result[i]].push(1);
         }
         if(output_2.hasOwnProperty(result[i])==true)
         {
             output_2[result[i]][0] += 1; 
         }
 
     }
     console.log("Total number of matches played per year as follows \n",output_2);
 
 });
/**************************Third query solution******************************************************/
CSVToJSON().fromFile("./matches.csv").then(matches => {
   

    let match_id = [];
    for(count of matches)
    {
        if(count.season == '2016')
        {
            match_id.push(count.id);
        }
    }

   //console.log(match_id.length);
   CSVToJSON().fromFile("./deliveries.csv").then(deliveries => {

    let extra_runs = [];
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
   
});
  
 });
 /**************************Fourth query solution***************************************************************************/
CSVToJSON().fromFile("./matches.csv").then(matches => {
    let match_id_2015 = [];
    for(count of matches)
    {
        if(count.season == '2015')
        {
            match_id_2015.push(count.id);
        }
    }
   //Now we got match ids of 2015 by above for loop----------------------------------------------------
   CSVToJSON().fromFile("./deliveries.csv").then(deliveries_2015 => {
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
    let economy = [];
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
});
 });
 /*****************Bowlers with most number of maidens***********************************************************/

   CSVToJSON().fromFile("./deliveries.csv").then(throws => {
    let bowler = {};
    let buffer = {
        'first': [0,0]
    };
        for(match of throws)
        {
           
                if(Object.keys(buffer)[0]=='first')
                {
                   buffer[match.bowler] = buffer[Object.keys(buffer)[0]];
                   delete buffer[Object.keys(buffer)[0]];
                }
                if(buffer.hasOwnProperty(match.bowler) == true)
                {
                    buffer[match.bowler][0] += parseInt(match.total_runs);
                    buffer[match.bowler][1] += 1;
                    //console.log(buffer);
                    if(buffer[match.bowler][1] == 6)
                    {
                        if(buffer[match.bowler][0] == 0)
                        {
                            
                            if(bowler[match.bowler] == undefined)
                            {
                               // console.log(match.bowler);
                               // 
                                bowler[match.bowler] = new Array();
                                bowler[match.bowler][0] = 0;
                               
                            }
                            if(bowler.hasOwnProperty(match.bowler) == true)
                            {
                                //console.log(match.bowler);
                                bowler[match.bowler][0] += 1; 
                            }
                        }

                    }
                }
                if(buffer.hasOwnProperty(match.bowler) == false)
                {
                    buffer[match.bowler] = buffer[Object.keys(buffer)[0]];
                    delete buffer[Object.keys(buffer)[0]];
                    buffer[match.bowler][0] = 0;
                    buffer[match.bowler][0] = parseInt(match.total_runs);
                    buffer[match.bowler][1] = 1;
                }
        }
  
    let sort = [];
    let final = {};
    //Getting economy rate and popping out balls!!!!!! ---------------------------------------------
    for(key in bowler)
    {
      sort.push(bowler[key][0]);
    }
    sort.sort(function(a, b){return b-a});
  
   //Matching bowler(key) with maiden values------------------------------------------------------------------
   
    for(let i=0;i<sort.length;i++)
    {
        for(key in bowler)
        {
           if(sort[i] == bowler[key][0])
           {
               final[key] = new Array();
               final[key].push(sort[i]);
           } 
       }
    }
    console.log("Top bowlers of most number of maiden overs\n",final);
//----------------------------Finally done-------------------------------------------------------------------
});


