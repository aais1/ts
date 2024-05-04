
// function add(a:number,b:number){
//     console.log(a+b);
// }

// add(1,2);

// function fullname(lname:string,fname:string){
//     console.log(fname+" "+lname);
// }

// const n1=1.3 ;

// fullname("Ali","Aais");


enum Role{
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person:{
    name:string;
    age:number;
    color:string;
    hobbies:string[];
    role:Role;
}={
    name:"Ali",
    age:18,
    color:"white",
    hobbies:["gaming","movies","running"],
    role:Role.ADMIN
}

for(const hobby of person.hobbies){
    console.log(hobby.toUpperCase());
}