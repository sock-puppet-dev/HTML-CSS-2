let user = []; // Empty array

user.push("pronix74");
user.push("halwa66");
console.log(user.length); // Output: 2
let size = user.push("root01", "scotty33", "anonymus");
console.log(size) // Output: 5

for (let n of user) {
    console.log(n);
} // Output:  pronix74, halwa66, root01, scotty33, anonymus

let n = user.pop(); // Remove last element -> anonymus
console.log(n + " was removed")
user.pop(); // Remove last element again
console.log(user.length); // Output: 3

for (let n of user) {
    console.log(n);
} // Output:  pronix74, halwa66, root01