let user = [
    ["pronix74", // [0][0]
        46, // [0][1]
        "wolfe@pronix.com", // [0][2]
        false // [0][3]
    ],
    ["halwa66", // [1][0]
        51, // [1][1]
        "halwa@pronix.com", // [1][2]
        false // [1][3]
    ],
    ["woafu", // [2][0]
        46, // [2][1]
        "1@woafu.com", // [2][2]
        true // [2][3]
    ]
];

console.log(user[1][0]); // Output: halwa66
console.log(user[1][1]); // Output: 51
console.log(user[1][2]); // Output: halwa@pronix.com
console.log(user[1][3] ? "Admin" : "User"); // Output: User
