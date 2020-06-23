let state='A'
let a=[]
let pos=0
let steps=12208951

for(let s=0;s<steps;s++){
    
    let val=a[pos]|0
    switch(state){

        case 'A':
            if(val==0){
                a[pos]=1
                pos++
                state='B'
            }else{
                delete a[pos]
                pos--
                state='E'
            }
            break

        case 'B':
            if(val==0){
                a[pos]=1
                pos--
                state='C'
            }else{
                delete a[pos]
                pos++
                state='A'
            }
            break

        case 'C':
            if(val==0){
                a[pos]=1
                pos--
                state='D'
            }else{
                delete a[pos]
                pos++
                state='C'
            }
            break

        case 'D':
            if(val==0){
                a[pos]=1
                pos--
                state='E'
            }else{
                delete a[pos]
                pos--
                state='F'
            }
            break

        case 'E':
            if(val==0){
                a[pos]=1
                pos--
                state='A'
            }else{
                pos--
                state='C'
            }
            break

        case 'F':
            if(val==0){
                a[pos]=1
                pos--
                state='E'
            }else{
                pos++
                state='A'
            }
            break
    }
}

let ones=Object.keys(a).length
console.log(ones)