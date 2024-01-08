const myArr=[0,1,2,3,4,5]
console.log(myArr);
console.log(typeof myArr);

//slice && splice

const myN1=myArr.slice(1,4)
console.log(myN1);
console.log("after slice",myArr);

const myN2=myArr.splice(1,4)
console.log(myN2);
console.log("after splice",myArr);

//push && pop

const newArr=[1,2,3,4,5,6]
console.log(newArr.push(9));//append at end & returns new length of arr
console.log(newArr.pop());

console.log(newArr.includes(3));
console.log(typeof(newArr.includes()));

console.log(newArr.unshift(25));//append at start & returns new length of arr
console.log(newArr.shift());

//concating two arrays

const marvel_heroes=["ironman","spiderman","hulk","thor"]
const dc_heroes=["batman","superman","wonder-woman"]
const all_heroes=marvel_heroes.concat(dc_heroes)

console.log(all_heroes);

console.log([...marvel_heroes,...dc_heroes])//another way of concatination

const arrOfArr=[1,2,3,4,[5,6],7,[8,9,10]]
console.log(arrOfArr.flat(1));

console.log(Array.from("Easha"));

console.log(Array.from({name:"Easha"}));//throws empty array

console.log(Array.of({name:"Easha"}));