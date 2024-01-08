//object.create(constructor)==>singleton

//object iterals

const sym=Symbol("key")
const jsObj={
    
    name:"Easha",
    [sym]:"key1",
    age:23,
    email:"easha@gmail.com",
    isAdult:true
}
console.log(jsObj["name"]);
console.log(jsObj[sym]);

jsObj.email="easha001@google.com"
console.log(jsObj);

//Object.freeze(jsObj)
//values of keys won't change as the object is freeze;

jsObj.age=18
console.log(jsObj);

jsObj.greeting=function(){
    console.log("hello user");
}

jsObj.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);//string interpolation
}

console.log(jsObj.greeting());
console.log(jsObj.greetingTwo());

//concating objects

const obj1={1:'a',2:'b'}
const obj2={3:'a',4:'b'}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3);

//object declear as constructor

const tinderUser={}
tinderUser.id="123"
tinderUser.name="Sammy"
tinderUser.IsLoggedIn=true

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

//object destructuring

const course={

    courseName:"JS",
    coursePrice:999,
    courseInstructor:"hitesh"

}
const {courseInstructor:instructor}=course
console.log(instructor);