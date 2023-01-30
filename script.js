"use strict"

let number = 123;

(function(){
    let number = 2;
    console.log(number+2);
    console.log(number);
}());

console.log(number+2);

const user = (function(){
    const privat = function(){
        console.log("I am privat")
    };
    return{
        sayHello: privat
    };
}());

    user.sayHello();