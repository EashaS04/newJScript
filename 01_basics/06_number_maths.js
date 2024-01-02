const number=new Number(12.8944)

console.log(number);
console.log(number.toFixed(2));
console.log(number.toLocaleString());

console.log(number.toLocaleString('en-IN'));

console.log(number.toPrecision(3));

console.log(number.toString().length);


/************Maths module************/

console.log(Math);
console.log(Math.pow(2,2));
console.log(Math.round(4.68));
console.log(Math.ceil(4.68));
console.log(Math.floor(4.68));

//math random is used to find any number between two numbers

console.log((Math.random()*10) +1);

const max=20
const min=10

console.log(Math.floor((Math.random())*(max-min+1)+min));