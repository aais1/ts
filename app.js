"use strict";
// function add(a:number,b:number){
//     console.log(a+b);
// }
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Ali",
    age: 18,
    color: "white",
    hobbies: ["gaming", "movies", "running"],
    role: Role.ADMIN
};
for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
function add(a, b) {
    //console.log(a+b);not returning a number so this this will give error
    return a + b;
}
console.log(add(1, 2));
//console.log(add('1','2')); this will give error because we have defined the type of a and b as number
function callback(a, b, cb) {
    const result = a + b;
    cb(result);
}
const cb = (num) => {
    console.log("In the callback :" + num * 2);
};
callback(1, 2, cb);
let userName;
let userInput;
//userInput=userName;err
if (typeof userName === 'string') {
    userInput = userName;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occured", 500);
