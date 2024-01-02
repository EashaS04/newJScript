/*stack= for primitive datatype:number,string,bigint,symbol,boolean,null(return type object),undefined 

 heap= for non-primitive(reference) datatype:object,array,function
*/

let myName="Easha"
let anotherName=myName
anotherName="Boney"

console.log(myName);
console.log(anotherName);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo=userOne
userTwo.email="easha@gmail.com"

console.log(userOne);
console.log(userTwo);