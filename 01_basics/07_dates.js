const myDate=new Date()
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

console.log(myDate.toJSON());
console.log(myDate.getTime());//millisecond

let createMyTime=new Date(2024,0,2,5,0)

console.log(createMyTime.toLocaleString());

let createTime=new Date("02-01-2024")

console.log(createTime.toLocaleString());

console.log(Math.floor(Date.now()/1000))//millisecond-->second

let todaysDate=new Date()
console.log(todaysDate);
console.log(todaysDate.getMonth());
console.log(todaysDate.getDate());
console.log(todaysDate.getFullYear());
console.log(todaysDate.getHours());