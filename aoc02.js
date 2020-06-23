let input
    =require('fs')
    .readFileSync('input/aoc02.txt','utf8')
    .split('\r\n')
    .map(e=>e.split('\t').map(Number))



let part1=0
for(let row of input){
    let min=Math.min(...row)
    let max=Math.max(...row)
    part1+=max-min
}
console.log(part1)



let part2=0
for(let row of input)
    for(let i=0;i<row.length;i++)
        for(let j=0;j<i;j++){
            let a=row[i]
            let b=row[j]
            if(a%b==0) part2+=a/b
            if(b%a==0) part2+=b/a
        }
console.log(part2)