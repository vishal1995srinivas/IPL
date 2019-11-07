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
 /**************************Fourth query solution ****************************************************** */
 
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
                    total_runs[match.bowler][1] = 1;
                }
                if(total_runs.hasOwnProperty(match.bowler)==true)
                {
                   
                   total_runs[match.bowler][0] += parseInt(match.total_runs); // no of runs
                   total_runs[match.bowler][1] += 1; // no of deliveries

                }
            }
        }

    }
    //Matched 2015 match-ids in deiveries.csv and we got 'bowler name': [total runs , total delveries]-------------------
    let sort = [];
    let economy = [];
    //Getting economy rate and popping out balls!!!!!! ---------------------------------------------
    for(key in total_runs)
    {
      total_runs[key][0] = ( total_runs[key][0] / total_runs[key][1] ) * 6;
      total_runs[key].pop();
      sort.push(total_runs[key][0]);
    }
    bubble_Sort(sort);
    //to find most economical bowler - bubble sort-----------------------------------
    function swap(arr, first_Index, second_Index){
        var temp = arr[first_Index];
        arr[first_Index] = arr[second_Index];
        arr[second_Index] = temp;
    }
    function bubble_Sort(arr){
    
        var len = arr.length,
            i, j, stop;
    
        for (i=0; i < len; i++){
            for (j=0, stop=len-i; j < stop; j++){
                if (arr[j] > arr[j+1]){
                    swap(arr, j, j+1);
                }
            }
        }
    
        sort = arr;
    }
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
/***********************5th query on process***************************************************************/

