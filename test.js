//1.
/*let firstName="john";
  var lastName="tesla";
  const age=19;
   console.log('im ${fistName}${lastName} and im ${age} years old');*/

/*2
//global scope
    var lastName="global";
function demo(){
    var firstName="i'm an inner var";
    function local(){
        var age="nineteen";
        console.log(lastName);
        console.log(firstName);
        console.log(age);
    }
    local();
    console.log(lastName);
    console.log(firstName);
    console.log(age);

}
demo();
console.log(lastName); // accessible
console.log(firstName);
console.log(age);*/
/*output ::
global
test.js:16 i'm an inner var
test.js:17 nineteen
test.js:20 global
test.js:21 i'm an inner var*/

//3
//var vs let vs const
//var
/*var b=10;
let c=10;
const s=78
c=11;    //let can be reassigned
console.log(c);
console.log(b);
console.log(s)*/

//1. operators
//1.arthmetic
/*const a=10;
const b=5;
const c=20;
const d=4;
const e=3;
const f=2;
const g=6;
const result=(a+b)*(c-d)/(e+f)%g;
console.log("result of (a+b)*(c-d)/(e+f)%g= ",result);*/  ///result=0
 
//comparsion operator
/*let a=5;
let b='5';
console.log("a==b:",a==b);
console.log("a!=b:",a!=b);
console.log("a===b:",a===b);
console.log("a!==b",a!==b);
console.log("a<b",a<b);
console.log("a>b",a>b);
console.log("a<=b",a<=b);
console.log("a>=b",a>=b);*/

//logical 
/* const a=true;
 const b=false;
 console.log((a && b) || !b);*/    //true
 /*let num=43;
 var str="hi";
 const bool=true;
 let n=null;
 let undef=undefined;
 console.log(num,str,bool,n,undef);*/  //output: 43 hi true null undefined

//type conversion
 /*const val="123";
 let val2=567;
 var val3=false;
 console.log(Number(val));  //123
 console.log(String(val2));  //567
 console.log(Boolean(val)); //true
 console.log(Boolean(val2));*/ // true
 
 //2.implicit coercion
 /*console.log(5+'10');//510
console.log('yes'+15);//yes15
console.log('10'*2); //here string is coerced to number 10 o/p:20
console.log(25 =='25');*/ //o/p:: true


//string manipulation
/*let name="yoha";
let initial="ampilli";
var fullName= name +''+initial;
console.log(fullName);// yohaampilli
//accesssing
let str="assignment-one";
console.log(str[0]); //a
console.log(str[6]); //m
//length
console.log(str.length);// 14
//substrings
console.log(str.substring(1,6)); //ssign
console.log(str.slice(10)); //-one
//template literals
const sum="dollars";
console.log(`the sum is ${sum}.`);//the sum is dollars
const str1=`this is the multi-
line string using template literal 
`;
console.log(str1);*/

//decision statements
/*var age=19;
if(age>=18)
{
    console.log("you are eligible to have bank account and ATM");

}
else if(age>=16)
{
    console.log("you are  eleigible for parent or joint bank account but not eligible for ATM");

}

 else{
    console.log("you are not eligible to have a bank a/c");

}*/

//switch statements
/*let val=3;
switch(val)
{
    case 1:
        console.log("val is 1");
         break;
    case 2:
        console.log("the val is 2");
        break;
        case 3:
            console.log("the val is 3");
            break;
            default:
                console.log("val is not 1,2 or 3");
                break;
}*/

//use 
//without using use
 
//with use 
//"use strict";
/*var test={
    prop=4,
    prop=90,// error :for using the duplicate
};
console.log(test);*/
/*"use strict";
 x=10;  //error:: x is not defined
console.log(x);*/
 //function declaration and call
 /*function details(name,age,address)
 {
    console.log(`hello, i'm ${name} and i'm ${age} years old.And my hometown is in ${address} `);
 }
 details("voldemort",100,"Albanian Forest");*/
 //passing arguments
 /*function canteen(meal,tax=0.09)
 {
    const total=meal*(1+tax);
    return total;

 }
 const totalBill=canteen(100,0.15);
 console.log(totalBill);*/ /// o/p:114.999999



 /*function Add(num1,num2=90)
 {
      return num1*num2;

 }
 console.log(Add(89));*/
   
 //return 
 /*function rectArea(width,height)
 {
      if(width >0 && height > 0 )
        {
return width*height;
        }
      
 }
 console.log(rectArea(12,90)); //1080
 console.log(rectArea(-9,-4)); */// undefined
  //chaining
  /*let add= x=>x+2;
  var mul=x=>x*2;
  var sub=x=>x-9;
  var res=sub(add(mul(90)));
  console.log(res); */   //173





            



