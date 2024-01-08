function myName() {
    console.log("Easha");
}
myName()


//sum
function sum(num1,num2){
    console.log(num1+num2) 
}
sum(2,3)

//another way of function call

function addNumbers(num1,num2){

    return num1+num2
}
const result=addNumbers(3,4)
console.log(result);

function userLogin(username){
    return `${username} is logged in`
}
console.log(userLogin("Easha"))

//function with rest operator

function calculateCartPrice(...num){//...rest op

    return num
}

console.log(calculateCartPrice(200,300,500,800,2500));


//show object through function

const userDetails={
    username:"easha",
    userId:"00250"
}
function showUser(user){
    return `user name is ${user.username} whose id is ${user.userId}`
}

console.log(showUser(userDetails));

//showing array using function

const movieNames=["Aquaman","Spiderman","Ironman"]

function showMovies(movie) {
 
   return movie[1]
}

console.log(showMovies(movieNames));

//function declaring in variable

const add=function addition(num=2){
    
    return num+2
}

console.log(add(3));

    
//arrow function

const sum2=(num1,num2) =>{

 return num1+num2
}
console.log(sum2(2,3));

//implicit return form

const subtract = (a,b) => a-b

console.log(subtract(5,2));