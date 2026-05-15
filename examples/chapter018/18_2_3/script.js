let user = [
    "John", // [0]
    "Jason", // [1]
    "Ben" // [2]
];

user[3] = "Tom";
user[5] = "Jay";
user[2] = undefined; // Delete value

for (let i = 0; i < user.length; i++) {
    console.log(user[i]);
}