/*****************Bowlers with most number of maidens***********************************************************/

   function fifth_query(throws)
   {
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
}
module.exports = fifth_query;


