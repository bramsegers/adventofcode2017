let input
    =require('fs')
    .readFileSync('input/aoc21.txt','utf8')
    .split('\r\n')



let rules=()=>{
    let rules=[]
    let T=[]
    T[2*2]=[
        [0,1,2,3],              // do nothng
        [2,0,3,1],              // rot R
        [1,3,0,2],              // rot L
        [1,0,3,2],              // flip X
        [2,3,0,1],              // flip Y
        [3,2,1,0],              // rot R rot R
        [0,2,1,3],              // rot R flip X
        [3,1,2,0]]              // rot R flip Y
    T[3*3]=[
        [0,1,2,3,4,5,6,7,8],    // do nothing
        [6,3,0,7,4,1,8,5,2],    // rot R
        [2,5,8,1,4,7,0,3,6],    // rot L
        [2,1,0,5,4,3,8,7,6],    // flip X
        [6,7,8,3,4,5,0,1,2],    // flip Y
        [8,7,6,5,4,3,2,1,0],    // rot R rot R
        [0,3,6,1,4,7,2,5,8],    // rot R flip X
        [8,5,2,7,4,1,6,3,0]]    // rot R flip Y
    for(let i of input){
        let s=i.split(' => ')
        let a=[...s[0]].filter(e=>e!='/').map(e=>e=='#'?1:0)
        let b=[...s[1]].filter(e=>e!='/').map(e=>e=='#'?1:0)
        for(let t of T[a.length])
            rules[t.map(e=>a[e]).join('')]=b
    }
    return rules
}



let generate=(rep)=>{
    let r=rules()
    let S=['010','001','111']
    for(let i=0;i<rep;i++){
        let S2=[]
        let mode=(S.length%2)?3:2
        let blocks=S.length/mode
        let len=S.length+blocks
        for(let i=0;i<len;i++) S2[i]=[]
        for(let i=0;i<blocks;i++){
            for(let n,m,k,j=0;j<blocks;j++){
                for(k='',m=0;m<mode;m++)
                    for(n=0;n<mode;n++)
                        k+=S[mode*i+m][mode*j+n]
                let val=r[k]
                let sz=mode+1
                for(m=0;m<sz;m++)
                    for(n=0;n<sz;n++)
                        S2[sz*i+m][sz*j+n]=val[sz*m+n]
            }
        }
        S=S2
    }
    let sum=0
    for(let r of S)
        for(let c of r)
            sum+=c
    console.log(sum)
}


generate(5)
generate(18)