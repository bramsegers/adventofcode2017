let input   =require('fs')
            .readFileSync('input/aoc10.txt','utf8')

let nums    =input
            .split(',')
            .map(Number)

let ascii   =input
            .split('')
            .map(e=>e.charCodeAt(0))


let N=256
let S=16


let sparse=()=>{
    let i,s=[]
    for(i=0;i<N;i++) s[i]=i
    return s
}


let knot=(s,lengths,rounds)=>{
    let pos=0
    let skip=0
    for(let r=0;r<rounds;r++){
        for(let len of lengths){
            let i=pos-1
            let j=pos+len
            while(++i<--j){
                let t=s[i%N]
                s[i%N]=s[j%N]
                s[j%N]=t
            }
            pos=(pos+len+skip)%N
            skip=(skip+1)%N
        }
    }    
}


let dense=(s)=>{
    let i,j,xor,d=[]
    for(i=0;i<S;i++){
        for(xor=0,j=0;j<S;j++)
            xor^=s[S*i+j]
        d[i]=xor
    }
    return d
}


let hex=(dense)=>{
    let h=''
    let a='0123456789abcdef'
    for(let n of dense){
        h+=a[(n>>4)]
        h+=a[n&15]
    }
    return h
}


let one=sparse()
knot(one,nums,1)
console.log(one[0]*one[1])


let two=sparse()
let suf=[17,31,73,47,23]
knot(two,[...ascii,...suf],64)
let d=dense(two)
let h=hex(d)
console.log(h)