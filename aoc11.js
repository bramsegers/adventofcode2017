let input
    =require('fs')
    .readFileSync('input/aoc11.txt','utf8')
    .split(',')


let [d1,d2]=[0,0]
let [x,y,z]=[0,0,0]


for(let i of input){
    if(i== 's') {x++;y--}
    if(i== 'n') {x--;y++}
    if(i=='sw') {y--;z++}
    if(i=='ne') {y++;z--}
    if(i=='se') {x++;z--}
    if(i=='nw') {x--;z++}
    let a=[x,y,z].map(e=>Math.abs(e))
    d1=Math.max(...a)
    d2=Math.max(d1,d2)
}


console.log(d1)
console.log(d2)