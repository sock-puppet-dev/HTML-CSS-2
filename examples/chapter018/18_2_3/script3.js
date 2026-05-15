let user = []; // Empty array

user.unshift("pronix74");
user.unshift("halwa66");
console.log(user.length); // Output: 2
let size = user.unshift("root01", "scotty33", "anonymus");
console.log(size) // Output: 5

for (let n of user) {
    console.log(n);
} // Output:  root01, scotty33, anonymus, halwa66, pronix74

let n = user.shift(); // Remove first element -> root01
console.log(n + " was removed")
user.shift(); // Remove first element again
console.log(user.length); // Output: 3

for (let n of user) {
    console.log(n);
} // Output:  anonymus, halwa66, pronix74