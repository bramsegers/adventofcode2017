let input
    =require('fs')
    .readFileSync('input/aoc23.txt','utf8')
    .split('\r\n')
    .map(e=>e.split(' '))



let ip=0
let mul=0
let abc='abcdefgh'
let reg=[0,0,0,0,0,0,0,0]


while(true){
    if(!input[ip]) break
    let [op,v1,v2]=input[ip]
    v1=isNaN(v1)?abc.indexOf(v1):v1|0
    v2=isNaN(v2)?reg[abc.indexOf(v2)]:v2|0
    switch(op){
        case 'set':
            reg[v1]=v2
            ip++
            break
        case 'sub':
            reg[v1]-=v2
            ip++
            break        
        case 'mul':
            reg[v1]*=v2
            ip++
            mul++
            break
        case 'jnz':
            ip+=reg[v1]?v2:1
            break
    }
}


console.log(mul)
 



/*
a=1
b=106700 (67)
c=123700 (67)
f=1             (A)
d=2
e=2             (B)
g=d*e-b         (C)
if(g==0) f=0
e++
g=e-b
if(g!=0) goto   (C)
d++
g=d-b
if(g!=0) goto   (B)
if(f==0) h++
g=b-c
if(g==0) return h
b+=17
goto            (A)
*/


let [a,b,c,d,e,f,g,h]=[0,0,0,0,0,0,0,0]
a=1
b=106700
c=123700
while(true){
    d=2
    e=2
    f=1
    while(d<b){
        if(b%d==0 && b/d>=e) f=0
        d++
    }
    if(f==0) h++
    g=b-c
    b+=17
    if(g==0){
        console.log(h)
        break
    }
}