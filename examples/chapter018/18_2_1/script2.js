let date = new Date();
let day = date.getDay();
let wd = [
    "Sunday", // wd[0]
    "Monday", // wd[1]
    "Tuesday", // wd[2]
    "Wednesday", // wd[3]
    "Thursday", // wd[4]
    "Friday", // wd[5]
    "Saturday" // wd[6]
];
console.log("Heute ist " + wd[day]);