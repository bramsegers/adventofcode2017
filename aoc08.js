let input
    =require('fs')
    .readFileSync('input/aoc08.txt','utf8')
    .split('\r\n')
    .map(e=>{
        let s=e.split(' ')
        return{
            var1: s[0],
            oper: s[1],
            val1: s[2]|0,
            var2: s[4],
            comp: s[5],
            val2: s[6]|0
        }
    })



let condition=(v1,c,v2)=>{
    if(c=== '>') return v1 >v2
    if(c==='<=') return v1<=v2
    if(c==='!=') return v1!=v2
    if(c=== '<') return v1 <v2
    if(c==='>=') return v1>=v2
    if(c==='==') return v1==v2
}



let operation=(v1,o,v2)=>{
    if(o==='inc') return v1+v2
    if(o==='dec') return v1-v2
}



let reg={}
let max1
let max2


for(let i of input)
    if(condition(reg[i.var2]|0, i.comp, i.val2)){
        reg[i.var1]=operation(reg[i.var1]|0, i.oper, i.val1)
        if(!max2 || reg[i.var1]>max2) max2=reg[i.var1]
    }
max1=Math.max(...Object.values(reg))


console.log(max1)
console.log(max2)