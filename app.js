// function add(a:number,b:number){
//     console.log(a+b);
// }
// add(1,2);
// function fullname(lname:string,fname:string){
//     console.log(fname+" "+lname);
// }
// const n1=1.3 ;
// fullname("Ali","Aais");
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Ali",
    age: 18,
    color: "white",
    hobbies: ["gaming", "movies", "running"],
    role: Role.ADMIN
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
