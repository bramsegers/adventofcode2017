let input
    =require('fs')
    .readFileSync('input/aoc05.txt','utf8')
    .split('\r\n')
    .map(Number)



let steps1=0
let nums1=[...input]
for(let i=0;i>=0 && i<nums1.length;steps1++)
    i+=nums1[i]++
console.log(steps1)



let steps2=0
let nums2=[...input]
for(let i=0;i>=0 && i<nums2.length;steps2++)
    i+=(nums2[i]>2)?nums2[i]--:nums2[i]++
console.log(steps2)