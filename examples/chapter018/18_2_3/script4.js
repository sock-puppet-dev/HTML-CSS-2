let user = [
    "pronix74",
    "halwa66",
    "root01"
];
user.splice(2, 0, "anonymus"); // Insert at user[2]

for (let n of user) {
    console.log(n);
} // Output: pronix74, halwa66, anonymus, root01

let del = user.splice(1, 2); // delete [1]&[2]
console.log(del + " were deleted!");
user.splice(1, 0, "woafu86", "john123"); // insert 2 elements
user.splice(0, 1, "pronix1974") // replace user[0] with pronix1974

for (let n of user) {
    console.log(n);
} // Output: pronix74, woafu86, john123, root01