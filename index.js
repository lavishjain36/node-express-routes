const square=require('./square');//imported square module 
const  circle=require('./circle');//imported circle module

const result1=square(5);
console.log(result1);


const result2=circle.calculateCircumference(3);
console.log(result2);

const result3=circle.calculateArea(3);
console.log(result3)