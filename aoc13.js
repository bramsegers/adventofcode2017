let input
    =require('fs')
    .readFileSync('input/aoc13.txt','utf8')
    .split('\r\n')
    .map(e=>{
        let pos=e.split(': ')[0]|0
        let range=e.split(': ')[1]|0
        let period=2*(range-1)
        return {pos,range,period}
    })



let severity=0
for(let i of input)
    if(i.pos%i.period==0) 
        severity+=i.pos*i.range
console.log(severity)



let delay=0
while(input.find(i=>(i.pos+delay)%i.period==0)) 
    delay++
console.log(delay)