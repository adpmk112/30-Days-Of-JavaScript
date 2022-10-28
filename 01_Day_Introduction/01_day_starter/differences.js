// var a = 10 
//     function f(){
//         console.log(a)
//     }
//     f();
//     console.log(a);  // global variable

// function f(){
//     var a = 10
// }

// console.log(a);   // can't call from outside. show error

// var a = 8 

// var a = 9 

// a = 10 

// console.log(10);  // var can redeclare 

// console.log(a);   // will show undefined value  

// var a = 20    

// let  b = 20

// function f(){
//     let a = 10
//     console.log(b);
// }

// console.log(b);
// console.log(a); // can't call from outside. show error

// let a = 10

// a = 30     // let can't redeclare

// console.log(a);

// let a = 10 
// if(true){
//     let a = 9 
//     console.log(a);  //this will show 9
// }
// console.log(a);   // this will show 10

// console.log(a);  // will show error except undefined value 
// let a = 10;   

// const a = 10;
// function f(){
//     a = 9
//     console.log(a);
// }
// f(); // show error as changing value


//Users cannot change the properties of the const object, 
//but they can change the value of properties of the const object.

const a ={
    prop1: 10,
    prop2: 9
}   // it is allowed 

a.prop1 = 3

console.log(a.prop1);
console.log(a.prop2);

// a= {
//     b: 10,
//     prop2: 9 
// }   // it is not allowed 

