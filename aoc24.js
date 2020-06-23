let input
    =require('fs')
    .readFileSync('input/aoc24.txt','utf8')
    .split('\r\n')
    .map(e=>{
        let a=e.split('/')[0]|0
        let b=e.split('/')[1]|0
        return {a,b}
    })


let part1=0
let part2=0
let maxlen=0


let dfs=(i,strength,len,components)=>{
    if(strength>part1) part1=strength
    if(len>=maxlen && strength>part2) part2=strength
    if(len>=maxlen) maxlen=len
    for(let j=0;j<components.length;j++){
        let c=components[j]
        if(c.a==i || c.b==i){
            let i2=(c.a==i)?c.b:c.a
            let s2=strength+c.a+c.b
            let comp2=[...components]
            comp2.splice(j,1)
            dfs(i2,s2,len+1,comp2)
        }
    }
}


dfs(0,0,0,input)
console.log(part1)
console.log(part2)