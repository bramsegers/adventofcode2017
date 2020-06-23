let input
    =require('fs')
    .readFileSync('input/aoc04.txt','utf8')
    .split('\r\n')
    .map(e=>e.split(' '))

    

let valid1=0
for(let i of input){
    let set=new Set(i)
    if(i.length==set.size) valid1++
}
console.log(valid1)



let valid2=0
for(let i of input){
    let set=new Set(i.map(e=>e.split('').sort().join('')))
    if(i.length==set.size) valid2++
}
console.log(valid2)