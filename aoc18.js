let input
    =require('fs')
    .readFileSync('input/aoc18.txt','utf8')
    .split('\r\n')
    .map(e=>e.split(' '))



let program=(init)=>{
    
    let ip=0
    let abc='abcdefghijklmnopqrstuvwxyz'
    let reg=[...abc].map(e=>0)
    for(let i in init) reg[abc.indexOf(i)]=init[i]
    let received=[]

    let receive=(v)=>received.push(v)

    let run=()=>{

        while(true){
            if(!input[ip]) return {status:'done'}
            let [op,v1,v2]=input[ip]
            v1=isNaN(v1)?abc.indexOf(v1):v1|0
            v2=isNaN(v2)?reg[abc.indexOf(v2)]:v2|0
            switch(op){
                case 'set':
                    reg[v1]=v2
                    ip++
                    break
                case 'add':
                    reg[v1]+=v2
                    ip++
                    break
                case 'mul':
                    reg[v1]*=v2
                    ip++
                    break
                case 'mod':
                    reg[v1]%=v2
                    ip++
                    break
                case 'jgz':
                    ip+=(reg[v1]>0)?v2:1
                    break
                case 'snd':
                    ip++
                    return {status:'sending',val:reg[v1]}
                case 'rcv':
                    if(!received.length) return {status:'pending'}
                    reg[v1]=received.shift()
                    ip++
                    break
            }
           
        }
    }
    return {run,receive}
}



let part1=()=>{
    let val
    let p=program()
    while(true){
        let r=p.run()
        if(r.status=='pending') return val
        if(r.status=='sending' && r.val) val=r.val
    }
}



let part2=()=>{
    let sent=0
    let p1=program({p:0})
    let p2=program({p:1})
    while(true){
        let r1=p1.run()
        let r2=p2.run()
        let more=false
        if(r1.status=='sending') {more=true;p2.receive(r1.val)}
        if(r2.status=='sending') {more=true;p1.receive(r2.val);sent++}
        if(!more) return sent
    }
}



console.log(part1())
console.log(part2())