/*

1. the number of matches played per year of all the years in IPL. - completed
2. the number of matches won of all teams over all the years of IPL. - completed
3. extra runs conceded per team in 2016.- completed 
4. the top economical bowlers in 2015 - to be done tomo 
5. Discuss a "Story" you want to tell with the given data. i.e. write a query of your own and find an interesting statistic to be done tomo
*/

const CSVToJSON = require("csvtojson");
const FileSystem = require("fs");
/******Second query solution **************************************************************/ 
CSVToJSON().fromFile("./matches.csv").then(matches => {
   // console.log(source);
   let output = {};
    let result = matches.map(a => a.winner);
   // console.log(result);
    for(let i=0;i<result.length;i++)
    {   
        if(result[i].length == 0)
        {
            result[i] = 'No Result';
        }
        if(output[result[i]]==undefined)
        {
            output[result[i]] = new Array();
            output[result[i]][0] = 0;
           // output[result[i]].push(1);
        }
        if(output.hasOwnProperty(result[i])==true)
        {
            output[result[i]][0] += 1; 
        }

    }
    console.log("The number of matches won of all teams over all the years of IPL are as follows \n",output);

});
/******************First query solution**************************************************/
CSVToJSON().fromFile("./matches.csv").then(matches => {
    // console.log(source);
    let output = {};
     let result = matches.map(a => a.season);
    // console.log(result);
     for(let i=0;i<result.length;i++)
     {   
         
         if(output[result[i]]==undefined)
         {
             output[result[i]] = new Array();
             output[result[i]][0] = 0;
            // output[result[i]].push(1);
         }
         if(output.hasOwnProperty(result[i])==true)
         {
             output[result[i]][0] += 1; 
         }
 
     }
     console.log("Total number of matches played per year as follows \n",output);
 
 });
/**************************Third query solution*******************************************************/
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
 /**************************Fourth query solution will be continued tomorrow ****************************************************** */
 

