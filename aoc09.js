let input
    =require('fs')
    .readFileSync('input/aoc09.txt','utf8')


let state=0 // 0=none, 1=group, 2=garbage, 3=skip
let nest=0
let score=0
let garbage=0


for(let c of input){
    if(state==0 && c=='{') {state=1;nest++;continue}
    if(state==0 && c=='<') {state=2;continue}
    if(state==1 && c=='<') {state=2;continue}
    if(state==1 && c=='{') {nest++;continue}
    if(state==1 && c=='}') {score+=nest--;continue}
    if(state==2 && c=='!') {state=3;continue}
    if(state==2 && c=='>') {state=1;continue}
    if(state==2)           {garbage++;continue}
    if(state==3)           {state=2;continue}
}

console.log(score)
console.log(garbage)

