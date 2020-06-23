let input
    =require('fs')
    .readFileSync('input/aoc12.txt','utf8')
    .split('\r\n')


let a=[]
for(let i of input){
    let j=i.split(' <-> ')
    let m=j[0]|0
    let n=j[1].split(', ').map(Number)
    a[m]=n
}


let b=[]
let search=(n)=>{
    b[n]=1
    for(let m of a[n])
        if(!b[m]) search(m)
}


let size
let cycles=0
for(let i=0;i<input.length;i++){
    if(b[i]) continue
    search(i)
    cycles++
    if(i) continue
    size=b.reduce((a,b)=>a+b)
}


console.log(size)    
console.log(cycles)