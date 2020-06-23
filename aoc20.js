let input
    =require('fs')
    .readFileSync('input/aoc20.txt','utf8')
    .split('\r\n')


let particles=()=>{
    return input
    .map(e=>{
        let n=e.match(/[+-]?\d+/g).map(Number)    
        let p=n.slice(0,3)
        let v=n.slice(3,6)
        let a=n.slice(6,9)
        return {p,v,a}
    })
}


let update=(p)=>{
    p.v[0]+=p.a[0]
    p.v[1]+=p.a[1]
    p.v[2]+=p.a[2]
    p.p[0]+=p.v[0]
    p.p[1]+=p.v[1]
    p.p[2]+=p.v[2]
}



let part1=()=>{
    let dmin
    let pmin
    let pts=particles()
    for(let i=0;i<pts.length;i++){
        let n=pts[i]
        for(let r=1;r<1000;r++) 
            update(n)
        let d=Math.abs(n.p[0])
             +Math.abs(n.p[1])
             +Math.abs(n.p[2])
        if(!dmin||d<dmin) {dmin=d;pmin=i}
    }
    console.log(pmin)
}


let part2=()=>{
    let pts=particles()
    for(let r=1;r<1000;r++){
        let pos=[]
        let col=[]
        for(let i=0;i<pts.length;i++){
            let n=pts[i]
            update(n)
            let t=pos[n.p]
            if(!t) t=pos[n.p]=[]
            let len=t.length
            t[len++]=i
            if(len==2) col[t[0]]=1
            if(len>=2) col[i]=1
        }
        pts=pts.filter((e,i)=>!col[i])
    }
    console.log(pts.length)
}


part1()
part2()