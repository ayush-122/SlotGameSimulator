

export function generateReels(reelsComb ,R1Len ,R2Len ,R3Len,R4Len,R5Len)
{ 
    const reels = Array.from({ length: 3 }, () => Array(5).fill(null));
   // console.log(reels);

    //index
    let R1 = Math.floor(Math.random() * R1Len)
    let R2 = Math.floor(Math.random() * R2Len )
    let R3 =Math.floor(Math.random() * R3Len)
    let R4=Math.floor(Math.random() * R4Len )
    let R5 =Math.floor(Math.random() * R5Len)

    const indices=[R1,R2,R3,R4,R5];

   // console.log(`R1 is ${R1} , R2 is ${R2} , R3 is ${R3} , R4 is ${R4} , R5 is ${R5}`);
       for (let j=0;j<5;j++)
        {
             for(let i=0;i<3;i++)
                {
                    let cyclicIndex = (indices[j] + i) % reelsComb[j].length;
                    reels[i][j]=reelsComb[j][cyclicIndex];
                }

        }
        return reels;

    }
