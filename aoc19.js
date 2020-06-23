let input
    =require('fs')
    .readFileSync('input/aoc19.txt','utf8')
    .split('\r\n')



let [x,y]=[input[0].indexOf('|'),0]
let [d,dx,dy]=[0,[0,1,0,-1],[1,0,-1,0]]


let token=(e)=>input[y+dy[(d+e)%4]][x+dx[(d+e)%4]]


let part1=''
let part2=0


while(true){
    part2++
    let t1=token(0)
    let t2=token(1)
    let t3=token(3)
    if(t1+t2+t3=='   ') break
    if(t1+t2=='  ') {t1=t3;d=(d+3)%4}
    if(t1+t3=='  ') {t1=t2;d=(d+1)%4}
    if(t1>='A' && t1<='Z') part1+=t1
    x+=dx[d]
    y+=dy[d]
}


console.log(part1)
console.log(part2)