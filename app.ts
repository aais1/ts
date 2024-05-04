
// function add(a:number,b:number){
//     console.log(a+b);
// }

// add(1,2);

// function fullname(lname:string,fname:string){
//     console.log(fname+" "+lname);
// }

// const n1=1.3 ;

// fullname("Ali","Aais");


const person:{
    name:string;
    age:number;
    color:string;
    hobbies:string[]
}={
    name:"Ali",
    age:18,
    color:"white",
    hobbies:["gaming","movies","running"]
}

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}