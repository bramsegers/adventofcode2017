let input=376



let t=[0]
let pos1=0
for(let i=1;i<=2017;i++){
    pos1=(pos1+input)%i
    t.splice(++pos1,0,i)
}
console.log(t[++pos1])



let val
let pos2=0
for(let i=1;i<=5e7;i++){
    pos2=(pos2+input)%i
    if(++pos2==1) val=i
}
console.log(val)