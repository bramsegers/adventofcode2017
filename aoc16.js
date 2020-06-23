let input
    =require('fs')
    .readFileSync('input/aoc16.txt','utf8')
    .split(',')
    .map(e=>{
        let instr=e[0]
        let vals=e.substring(1).split('/')
        return {instr,vals}
    })



let A='abcdefghijklmnop'
let P=[...A]


for(let rep=1e9,r=1;r<=rep;r++){
    for(let {instr,vals} of input){
        if(instr=='s'){
            let p1=P.slice(-vals[0])
            let p2=P.slice(0,16-vals[0])
            P=[...p1,...p2]
        }
        if(instr=='x'){
            let i=vals[0]
            let j=vals[1]
            let t=P[j]
            P[j]=P[i]
            P[i]=t
        }
        if(instr=='p'){
            let i=P.indexOf(vals[0])
            let j=P.indexOf(vals[1])
            let t=P[j]
            P[j]=P[i]
            P[i]=t
        }
    }
    let u=P.join('')
    if(r==1 || r==rep) console.log(u)
    if(u==A) r=rep-(rep%r)
}