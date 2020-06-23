let input
    =require('fs')
    .readFileSync('input/aoc06.txt','utf8')
    .split('\t')
    .map(e=>e|0)


let realloc=()=>{
    let len=input.length
    let [maxi,max]=[0,0]
    for(let j=0;j<len;j++)
        if(input[j]>max) 
            [maxi,max]=[j,input[j]]
    input[maxi]=0
    let div=(max/len)|0
    for(let j=0;j<len;j++) 
        input[j]+=div
    let res=max%len
    for(let j=0;j<res;j++)
        input[(maxi+1+j)%len]++
}


let part1=()=>{
    let seen=[]
    for(let steps=1;;steps++){
        realloc()
        if(seen[input]) return steps
        seen[input]=true
    }
}


let part2=()=>{
    let seen=[]
    seen[input]=true
    for(let steps=1;;steps++){
        realloc()
        if(seen[input]) return steps
    }
}


console.log(part1())
console.log(part2())