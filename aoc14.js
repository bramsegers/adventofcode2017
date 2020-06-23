let input='amgozmfv'



let hash=(string)=>{

    let I=[...string].map(e=>e.charCodeAt(0))
    let N=256
    let R=64
    let S=16
    let suf=[17,31,73,47,23]
    let sparse=[]

    let knot=()=>{
        let lengths=[...I,...suf]
        for(let i=0;i<N;i++)
            sparse[i]=i
        let pos=0
        let skip=0
        for(let r=0;r<R;r++){
            for(let len of lengths){
                let i=pos-1
                let j=pos+len
                while(++i<--j){
                    let t=sparse[i%N]
                    sparse[i%N]=sparse[j%N]
                    sparse[j%N]=t
                }
                pos=(pos+len+skip)%N
                skip=(skip+1)%N
            }
        }
    }

    let dense=()=>{
        let i,j,xor,dens=[]
        for(i=0;i<S;i++){
            for(xor=0,j=0;j<S;j++)
                xor^=sparse[S*i+j]
            dens[i]=xor
        }
        return dens
    }

    let bin=()=>{
        let b=[]
        let dens=dense(sparse)
        for(let n of dens)
            for(let i=0;i<8;i++)
                b.push((n>>(7-i))&1)
        return b
    }

    return {knot,bin}
}



let sum=0
let arr=[]
for(let i=0;i<128;i++){
    let h=hash(input+'-'+i)
    h.knot()
    arr[i]=h.bin()  
    sum+=arr[i].reduce((a,b)=>a+b)
}
console.log(sum)



let clear=(j,i)=>{
    arr[j][i]=0
    if(j>0   && arr[j-1][i]) clear(j-1,i)
    if(i>0   && arr[j][i-1]) clear(j,i-1)
    if(j<127 && arr[j+1][i]) clear(j+1,i)
    if(i<127 && arr[j][i+1]) clear(j,i+1)
}



let regions=0
for(let j=0;j<128;j++)
    for(let i=0;i<128;i++)
        if(arr[j][i]){
            clear(j,i)
            regions++
        }
console.log(regions)