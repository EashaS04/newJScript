//for
//ctrl+d=duplicate
for (let i = 0; i <=10; i++) {
    const element = i;
    console.log(element);
    
}

const myArray=["flash","batman","superman"]
// console.log(myArray.length);-->3
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
}

for (let i = 1; i < 5; i++) {
    console.log("print =" + i);
    for (let j = 1; j < 4; j++) {
        console.log(i + '*' + j + "=" + i*j);
        
    }
    
}

//break and continue

for (let i = 1; i <= 20; i++) {
    if (i===5) {
        console.log(`reached to 5`);
        break
    }
    console.log(`value of i ${i}`);
    
}

for (let i = 1; i <= 20; i++) {
    if (i===5) {
        console.log(`reached to 5`);
        continue
    }
    console.log(`value of i ${i}`);
    
}

//while

let index=1
while (index<=10) {
    console.log(`value is ${index}`);
    index=index+2
}

//do-while

let score=11
do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);

//for of

let arr=[1,2,3,4,5,6,7,8,9]

for (const num of arr) 
{
    console.log(num);
}

//map

const map=new Map()
map.set('IN',"India")
map.set('UN',"United Nations")
map.set('FR',"France")

console.log(map);

//map destructure

for (const [key,value] of map) {
    
    console.log(key + ':' + value);
   
}

const myObj={//key==>user defined
    js:"javascript",
    cpp:"c++",
    py:"python",
    java:"java"
}

for (const key in myObj) {
    console.log(myObj[key]);
}

const arr2=["js","py","java","cpp"]//key==index
for (const key in arr2) {
    console.log(arr2[key]);

}

//foreach

let arr3=["ruby","go","rust"]
arr3.forEach(function(item) {
    console.log(item);
})

arr3.forEach((item)=> {//arrow fn
    console.log(item);
})

arr3.forEach((item,index,arr)=> {
    console.log(item,index,arr);
})

//object inside array

const myCoding=[
    {
      langNmae:"javaScript",
      langFile:"js"
    },
    {
        langNmae:"python",
        langFile:"py"
    },
    {
      langNmae:"java",
      langFile:"java"
    }
]

myCoding.forEach((item)=>{
console.log(item.langNmae);
})

//forEach returns undefined, filter returns values

const numbers=[1,2,3,4,5,6,7,8,9,10]

// const nums=numbers.forEach((items) => {
//    console.log(items);
// })
// console.log(nums);

const num=numbers.filter((item) => item>5)//filter
 console.log(num);

//return using forEach
const newNum=[]
numbers.forEach((num) => {
    if (num>4) {
        newNum.push(num)
    }
 })
 console.log(newNum);

//chaining of methods

let values=[1,2,3,4,5,6,7,8,9,10]

let count=values.map((num) => (num*10))
                .map((num) => (num+1)) 
                .filter((num) => (num>40))
             
 console.log(count); 
 
 //arrary.reduce

 const array1=[1,2,3,4,5]
 
 let initialNum=0
 const sumWithIinitial=array1.reduce((accumulator,currentvalue) => (accumulator+currentvalue),initialNum)

 console.log(sumWithIinitial);