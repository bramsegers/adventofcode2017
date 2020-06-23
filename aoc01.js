let input
    =require('fs')
    .readFileSync('input/aoc01.txt','utf8')
    .split('')
    .map(Number)


let sum=(offset)=>{
    let sum=0
    let len=input.length
    for(let i=0;i<len;i++){
        let j=(i+offset)%len
        if(input[i]==input[j]) sum+=input[i]
    }
    console.log(sum)
}


sum(1)
sum(input.length>>1)