// function add(a:number,b:number){
//     console.log(a+b);
// }
// add(1,2);
// function fullname(lname:string,fname:string){
//     console.log(fname+" "+lname);
// }
// const n1=1.3 ;
// fullname("Ali","Aais");
var person = {
    name: "Ali",
    age: 18,
    color: "white",
    hobbies: ["gaming", "movies", "running"]
};
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase());
}
