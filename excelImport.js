import fs from "fs";
import xlsx from "xlsx";
import path from "path";
let paylines=[]; 
let reelsBaseCombination =[]; 
let reelsFGCombination =[];
let paytable={};


function transpose(rangeData)
{
    let reelBase=[];
    let rows=rangeData.length;
    let cols=rangeData[0].length;
    for(let i=0;i<cols;i++)
         reelBase[i]=[];
    for(let i=0;i<rows;i++)
        {
            for(let j=0;j<cols;j++)
                {
                    if(rangeData[i][j]!=undefined)
                    reelBase[j][i]=rangeData[i][j]
                }
        }
         
        return reelBase;
}

export function excelImport()
{
   const workbook =xlsx.read(fs.readFileSync(path.join(path.resolve(),"File","BFFL-95.xlsx")));
 //  console.log(workbook);
    //namedRanges(array) will stores all names of excel
   const namedRanges =workbook.Workbook.Names;
   //console.log(workbook.Workbook)
   //console.log(namedRanges[0].Ref);

   //const worksheet = workbook.Sheets["BG Reel"];
   //const data = xlsx.utils.sheet_to_json(worksheet);
 

   namedRanges.forEach(namedRange => {
    // Name of the range

    const name = namedRange.Name;
    //console.log(name);
    const refersTo = namedRange.Ref;
    const [sheetName, cellRange] = refersTo.split('!');
    const cleanRange = cellRange.replace(/\$/g, '');
    const worksheet = workbook.Sheets[sheetName.replace(/'/g, '')];
    let rangeData = xlsx.utils.sheet_to_json(worksheet, { range: cleanRange, header: 1 });
   // console.log(rangeData);
    
    //console.log(`Data for named range "${name}":`, rangeData);
    if(name=="BaseReels")
        {
            rangeData=rangeData.slice(1);
           reelsBaseCombination =transpose(rangeData);
   // console.log(reelBase);
        }
    else if(name =="FGReels")
        {
            rangeData=rangeData.slice(1);
            reelsFGCombination =transpose(rangeData);
        }
     if(name==="paytable")
        {
            rangeData=rangeData.slice(1);
            //console.log(rangeData);
            paytable={}
            rangeData.forEach(data=>{
                const key =data[0];
                const values =data.slice(1);
                paytable[key]=values;
            });

            

        }

        //payline
   if(name.startsWith('Line') ||name.startsWith('line'))
    {
      let lineNumber = parseInt(name.slice(4));
        rangeData =rangeData.flat();
        console.log(lineNumber,rangeData);
        paylines[lineNumber-1]=[];

        rangeData.forEach((el)=>{
          const [rowStr,colStr] =el.replace(/\[|\]/g,'').split('');
                const row =parseInt(rowStr);
                const col =parseInt(colStr);
                paylines[lineNumber-1].push([row,col]);

        })
    
    }
  })
  
  // console.log(payLineStr);
     console.log('................After change..................');
     //console.log('reelsBase',reelsBaseCombination);
     //console.log('reesFreeGame',reelsFGCombination);
     console.log('paylines',paylines);
     //console.log('paytable',paytable);
// write all data to config.js file
//reelsBaseCombination , //reelsFGCombination , //Paylines // Paytables
 writeConfigFile(reelsBaseCombination,reelsFGCombination,paylines,paytable);
}

function formatArrayForConfig(array) {
    return JSON.stringify(array)
        .replace(/\],/g, '],\n    ')
        .replace(/\[\[/, '[\n    [')
        .replace(/\]\]/, ']\n]');
}

function format2DArrayForConfig(array) {
    const formattedArray = array.map(subArray => JSON.stringify(subArray)).join(',\n    ');
    return '[\n    [\n    ' + formattedArray.substring(1) + '\n]';
}

function writeConfigFile(reelsBaseCombination,reelsFGCombination,paylines,paytable){
    {    let data="";
        //write betAmount
        fs.writeFileSync("./config/config.js", "export const betAmount=30;\n\n");

         
        //write reelsBaseCombination
    

         data = "export let reelsBaseCombination = " + formatArrayForConfig(reelsBaseCombination) + ";";
          console.log(reelsBaseCombination);
        fs.appendFileSync("./config/config.js",data);
          console.log(data);
        //write reelsFGcombination
          data = "\n\n export let reelsFGCombination="+formatArrayForConfig(reelsFGCombination) + ";";
          fs.appendFileSync("./config/config.js",data);
         console.log(data);

          //write paylines

          data = "\n\n export let paylines="+format2DArrayForConfig(paylines) + ";";;
          console.log(paylines);
          fs.appendFileSync("./config/config.js",data);
          console.log(data);

          //write paytables

          data ="\n\n export let paytable=\n"+formatArrayForConfig(paytable) + ";";
          console.log(data);
          fs.appendFileSync("./config/config.js",data);
        
    }
}

excelImport();