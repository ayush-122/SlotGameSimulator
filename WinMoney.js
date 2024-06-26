import {paytable,paylines} from "./config/config.js"
export function winMoneyInSpin(reels)
{   //totalPriceWin in a single Spin
    let totalSpinWin=0;
    for(let i=0;i<paylines.length;i++){
        const line=[];
        const payline =paylines[i];
        
        for(let j=0;j<payline.length;j++)
            {
                const coordinate =payline[j];
                line.push(reels[coordinate[0]][coordinate[1]]);
                
            }

        // using map and reduce to solve the same problem
    //    return  paylines.reduce((total,payline,index)=>{
    //         const line = payline.map(coordinate=>reels[coordinate[0]][coordinate[1]]);
    //         return total+linePriceWin(line,index+1);
    //      },0);

      totalSpinWin+=  linePriceWin(line,i+1);
     
    }
    return totalSpinWin;
   // console.log(totalPriceWin);
}



//function to calculate the price win in a particular payline

function linePriceWin(line,lineNum)
{
   
    let lineWin=0;
    
    if (line[0] === 'WC') {
        let wcCount = 1;
        let symCount = 0;
        let flag = true;
        let firstSymbol;

        for (let i = 1; i < line.length; i++) {

            //count the first all consecutive Wild character(WC) count
            if (line[i] === 'WC' && flag) {
                wcCount++;
            } else {
                //after that count the consecutive different characters
                if (flag) {
                    firstSymbol = line[i];
                    symCount = wcCount + 1;
                    flag = false;
                } else if (line[i] === firstSymbol || line[i]=='WC') {
                    symCount++;
                } else {
                    break;
                }
            }
        }

        if (firstSymbol) {
            lineWin=   Math.max(paytable['WC'][line.length-wcCount] , paytable[firstSymbol][line.length-symCount]);
        } else {
            // If only wildcards are present
            lineWin= paytable['WC'][line.length-wcCount];
        }
    }
        else
        {
            let len=1;
            
            for(let i=1;i<line.length;i++)
                {
                    if(line[0]==line[i] ||line[i]=='WC')
                        len++;
                    else
                    break;
                }
             lineWin=   paytable[line[0]][line.length-len];
            // if(linepriceWin>0)
           //  console.log(`line ${lineNum} pays $${linepriceWin}`);
               
        }
        return lineWin;
}


