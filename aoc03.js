let input=277678


let part1=(n)=>{ // O(1)
    let k=parseInt((Math.sqrt(n)-1)/2)
    let m=n-(2*k+1)*(2*k+1)
    let [p,x,y]=[2*k+2,k,k]
    if(m>0) {x++;y++}
    if(m>=p) {m-=p;y-=p;} else {y-=m;m=0}
    if(m>=p) {m-=p;x-=p;} else {x-=m;m=0}
    if(m>=p) {m-=p;y+=p;} else {y+=m;m=0}
    let ans=Math.abs(x+m)+Math.abs(y)
    console.log(ans)
}


let part2=(n)=>{ // O(n)
    let x=0
    let y=0
    let len=0
    let mat=[]
    mat[[x,y]]=1
    while(true){
        x++
        y++
        len+=2
        for(let d of [[0,-1],[-1,0],[0,1],[1,0]]){
            for(let i=0;i<len;i++){
                x+=d[0]
                y+=d[1]
                let sum=0
                for(let j of [x-1,x,x+1])
                    for(let k of [y-1,y,y+1])
                        sum+=mat[[j,k]]|0
                mat[[x,y]]=sum
                if(sum>n) return console.log(sum)
            }
        }
    }
}


part1(input)
part2(input)