console.log('up and working!!');
let s= 10;
console.log(s);
const y :number=10.1;
console.warn("the number type:",y);
var z:boolean =true;
console.error("boolean type",z);
let data:number[]= [10,20,30];
data.push(80);
console.log(data.length);
data.forEach(
         (num)=>console.log(num)

);
console.log(data[0]+data[1]);