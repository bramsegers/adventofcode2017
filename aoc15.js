let A={val:591n, mul:16807n, mod:2147483647n}
let B={val:393n, mul:48271n, mod:2147483647n}



let count1=0
for(let i=0;i<40000000;i++){
    A.val=(A.val*A.mul)%A.mod
    B.val=(B.val*B.mul)%B.mod
    let a=A.val%(1n<<16n)
    let b=B.val%(1n<<16n)
    count1+=(a==b)
}
console.log(count1)



let count2=0
A.val=591n
B.val=393n
for(let i=0;i<5000000;i++){
    do{A.val=(A.val*A.mul)%A.mod} while(A.val%4n)
    do{B.val=(B.val*B.mul)%B.mod} while(B.val%8n)
    let a=A.val%(1n<<16n)
    let b=B.val%(1n<<16n)
    count2+=(a==b)
}
console.log(count2)