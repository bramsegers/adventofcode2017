let input
    =require('fs')
    .readFileSync('input/aoc22.txt','utf8')
    .split('\r\n')


let grid=()=>{
    let g=[]
    for(let j=0;j<input.length;j++)
        for(let i=0;i<input[j].length;i++)
            if(input[j][i]=='#') g[j+'_'+i]=2
    return g
}


let dx=[0,1,0,-1]
let dy=[-1,0,1,0]


let part1=()=>{
    let g=grid()
    let x=(input.length-1)/2
    let y=x
    let d=0
    let infected=0
    for(let i=0;i<10000;i++){
        let key=y+'_'+x
        let inf=g[key]==2
        d=inf?(d+1)%4:d=(d+3)%4
        g[key]=inf?0:2    
        x+=dx[d]
        y+=dy[d]
        if(!inf) infected++
    }
    console.log(infected)
}


let part2=()=>{
    let g=grid()
    let x=(input.length-1)/2
    let y=x
    let d=0
    let infected=0
    for(let i=0;i<10000000;i++){
        let key=y+'_'+x
        let state=g[key]|0
        if(state==0) d=(d+3)%4
        if(state==2) d=(d+1)%4
        if(state==3) d=(d+2)%4
        state=(state+1)%4
        g[key]=state    
        x+=dx[d]
        y+=dy[d]
        if(state==2) infected++
    }
    console.log(infected)
}


part1()
part2()