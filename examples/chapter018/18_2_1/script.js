let user = [
    "John", // [0]
    "Frank", // [1]
    "Steven" // [2]
];
console.log(user[1]); // Output: Frank
let name01 = user[0]; // name01 = "John"
console.log(name01); // Output: John
user[2] = "Steve"; // "Steve" gets overwritten
console.log("user[0] = " + user[0]); // Output: user[0] = John
console.log("user[1] = " + user[1]); // Output: user[1] = Frank
console.log("user[2] = " + user[2]); // Output: user[2] = Steve