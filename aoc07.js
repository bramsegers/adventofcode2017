let input
    =require('fs')
    .readFileSync('input/aoc07.txt','utf8')
    .split('\r\n')



let tree={}
for(let i of input){
    let name=i.split(' ')[0]
    let weight=i.split('(')[1].split(')')[0]|0
    let children=i.includes('->')?(i.split('-> ')[1]).split(', '):[]
    tree[name]={weight,children}
}



for(let k in tree)
    for(let c of tree[k].children)
        tree[c].parent=k



let root=Object.keys(tree)[0]
while(tree[root].parent)
    root=tree[root].parent
console.log(root)



let weight=(parent)=>{
    let p=tree[parent]
    let s=p.weight
    for(let c of p.children)
        s+=weight(c)
    return s
}

let peak=root
//peak='gejdtfw'
//peak='fbtzaic'
//peak='mdbtyw'
for(let c of tree[peak].children)
    console.log(c,weight(c))



console.log(tree['mdbtyw'].weight-weight('mdbtyw')+weight('nzkxl'))