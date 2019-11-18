function second_query(matches)
   {
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
    console.log("The number of matches won of all teams over all the years of IPL are as follows \n", output);

   }

   module.exports = second_query;
