//create fruits array
/*let fruits=["banana","apple","pineapple","custard","blueberry"];
for(let i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);

}
//Access third element
console.log(fruits[3]);
//find the length
console.log(fruits.length);
///operations
//push()
fruits.push("cherry");
console.log(fruits);
fruits.pop();
console.log(fruits);
fruits.unshift("Mango");
console.log(fruits);
fruits.shift();
console.log(fruits);
///intro objects
let person={
    name:"tonyStark",
    age:32,
    city:"NewYorkCity"

};
console.log(person.name);
console.log(person["age"]);
person.Occupation="Avenger";
console.log(person);
person["hobbies"]=["videoGames","learning new skills","travelling"];
console.log(person);
let cars={
    make:"tata",
    model:"tata",
    year:2024,

    drive:function ()
    {
        console.log("the car started moving");

    }
};
console.log(cars.drive());
const Calc={
     
    add:function(a,b)
    {
        return a+b;
         
    },
    sub:function(a,b)
    {
        return a-b;
    },
    mul:function(a,b)
    {
        return a*b;

    },
    div:function(a,b)
    {
        return a/b;
    },

};
console.log(Calc.add(90,80));
console.log(Calc.sub(9,8));
 console.log(Calc.mul(9,80));
console.log(Calc.div(900,80));
///itertives
let num=[1,2,3,4,5];
for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}
let names=["India","USA","Australia","Italy","France"];
let i=0;
while(i<names.length)
{
    console.log(names[i]);
    i++;

}*/
//sum of the array
/*let num=[1,2,3,4,5];
let sum=0;
for(let i=0;i<num.length;i++)
{
    sum+=num[i];
}*/
//break and continue
/*let digits=[1,2,3,4,5];
for(let i=0;i<digits.length;i++)
{
    if(digits[i]==3)
    {
        console.log("break");
        break; //or continue
    }
    console.log(digits[i]);
}*/
//global and local
/*let showId=9087;
function employee()
{
    let newEmp="i'm just a new recruit i don't have the id ";
    console.log(showId);
    console.log(newEmp);
}
employee();
console.log(showId);
console.log(newEmp);
//hoisting impact on variable declaration and func calls
console.log(a);
console.log(b);
var a=89;
let b=98;
stuId();
function stuId()
{
    console.log("show your id");

}
stuId();*/
//hoisting
/*console.log(x);  //undefined
var x=90;
console.log(x);  //90 var can be hoisted 
console.log(y);
var y=98;
console.log(y);*/   //let not hoisted
/*emp();
const emp=function()
{
    console.log("im employee of particular xyz company");
}*/


//hoisted func 
/*juteBags();
function juteBags()
{
    console.log("everyone should use jute Bags");
}
//o/p::everyone should use jute bags
//function expression that won't work
Calculator();
const Calculator=function()
{
    console.log("it is calculator ");
}
//o/p::TypeError
//this is used in the regular functionU*/
/*function func()
{
    console.log(this);
}
func();
//objects
let num={
    a:90,
    func:function()
        {
    const obj =()=>{
        console.log(this.a);
    };
    obj();
}
    
}
num.func();*/


