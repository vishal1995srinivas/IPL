function first_query(matches)
{
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
 
 }
 module.exports = first_query;
