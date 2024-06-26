import { generateReels } from "./generateReels.js";

import { winMoneyInSpin } from "./WinMoney.js";
import { betAmount ,reelsBaseCombination,reelsFGCombination }  from "./config/config.js";









  

//entry point
function main()
{
    let totalBaseWin=0;
    let totalFreeWin=0;
    let totalBonousWin=0;
    let totalBaseSpinRound=1000000000;
    //excelImport();
    

    
    for(let spinBaseRound=1;spinBaseRound<=totalBaseSpinRound;spinBaseRound++)
        {
            let freeGame=0;
            
            //   console.log('.....Spin round:',spinRound ,'...................');
            let reels =generateReels(reelsBaseCombination,reelsBaseCombination[0].length,reelsBaseCombination[1].length ,reelsBaseCombination[2].length,reelsBaseCombination[3].length ,reelsBaseCombination[4].length);

        
           let spinBaseWin=  winMoneyInSpin(reels);
           totalBaseWin+=spinBaseWin;
           let scCount=countSymbol(reels,'SC');
           let boCount =countSymbol(reels ,'BO');

           if(boCount>=3)
            {
               let boAmountSpin =calculateBonousAmount();
                totalBonousWin+=boAmountSpin;
            }
          // console.log('Scatter Count',scCount);
           freeGame = countFreeGame(scCount);
           //console.log('Free game Count',freeGame);
           for(let j=1;j<=freeGame;j++)
            {
                const reels =generateReels(reelsFGCombination,reelsFGCombination[0].length,reelsFGCombination[1].length,reelsFGCombination[2].length,reelsFGCombination[3].length,reelsFGCombination[4].length);
                let spinFreeWin = winMoneyInSpin(reels);
                totalFreeWin+=spinFreeWin;
            }
            
            
            if(spinBaseRound%100000==0)
                {
                    let baseGameRTP =(totalBaseWin/(betAmount*spinBaseRound)) *100;
                    let freeGameRTP=((totalFreeWin)/(betAmount*spinBaseRound))*100;
                    let bonousGameRTP = ((totalBonousWin)/(betAmount*spinBaseRound))*100;
                     console.log(`Free Game RTP: ${freeGameRTP}  ,baseGameRTP : ${baseGameRTP} ,bonous Game RTP : ${bonousGameRTP}`);
                }
           
        }
    
}

function calculateBonousAmount()
{
    let boAmountSpin=0;
    const randomNum= Math.floor(Math.random()*1000);
    if(randomNum>=0 && randomNum<200)
            boAmountSpin= betAmount*3;
    else if(randomNum>=200 && randomNum<450)
            boAmountSpin=2000;
    else if(randomNum>=450 && randomNum<650)
         boAmountSpin=betAmount*5;
    else if(randomNum>=650 && randomNum<970)
        boAmountSpin=5000;
    else if(randomNum>=970 && randomNum<990)
          boAmountSpin=betAmount*8;
    else if(randomNum>=990 && randomNum<1000)
        boAmountSpin=9000;
    else
        boAmountSpin=0;

     
    return boAmountSpin;

}

function countFreeGame(scCount)
{ 
    let freeGame;
    if(scCount===3)
        {
           freeGame=8;
        }
    else if(scCount===4)
        {
            freeGame=12;
        }
    else if(scCount>=5)
        {
            freeGame=15;

        }
        else{
            freeGame=0;
        }
        return freeGame;
}


function countSymbol(reels,symbol)
{

   return reels.flat().reduce((total,current)=>{
            if(current===symbol)
                total++;
            return total;
    },0);
        
}





function printReels(reels)
{
    console.log(reels);
}

// let temp=[
//     [ 'H1', 'H4', 'L1', 'L3', 'L4' ],
//     [ 'L2', 'H2', 'H5', 'L1', 'L5' ],
//     [ 'L1', 'L2', 'L5', 'H5', 'L4' ]
//   ]
// let cnt = countScatter(temp)
// console.log(countFreeGame(cnt));
main();



