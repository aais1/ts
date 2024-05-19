
// function add(a:number,b:number){
//     console.log(a+b);
// }

// add(1,2);

// function fullname(lname:string,fname:string){
//     console.log(fname+" "+lname);
// }

// const n1=1.3 ;

// fullname("Ali","Aais");

type Person={
    name:string;
    age:number;
    color:string;
    hobbies:string[];
    role:Role;
}


enum Role{
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person:Person={
    name:"Ali",
    age:18,
    color:"white",
    hobbies:["gaming","movies","running"],
    role:Role.ADMIN
}

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}



function add (a:number,b:number):number {
    //console.log(a+b);not returning a number so this this will give error
    return a+b;
}


console.log(add(1,2));

//console.log(add('1','2')); this will give error because we have defined the type of a and b as number

function callback(a:number,b:number,cb:(num:number)=>void):void{
    const result=a+b;
    cb(result);
}

const cb=(num:number)=>{
    console.log("In the callback :"+num*2);
}

callback(1,2,cb);



let userName:unknown;
let userInput:string;

//userInput=userName;err

if(typeof userName==='string'){
    userInput=userName;
}

function generateError(message:string,code:number):never{
    throw {message:message,errorCode:code};
}

generateError("An error occured",500);