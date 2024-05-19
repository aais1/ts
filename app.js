// function add(a:number,b:number){
//     console.log(a+b);
// }
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
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
