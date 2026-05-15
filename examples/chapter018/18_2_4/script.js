function compare(val1, val2) {
    if (val1 < val2) {
        return -1; // va1 is less than val2
    } else if (val1 > val2) {
        return 1; // val1 is greater than val2
    } else {
        return 0; // val1 and val2 are identical
    }
}

function printUser(item) {
    console.log(item);
}

let user = [
    "halwa66",
    "pronix74",
    "conrad22",
    "anton43",
    "beta88"
];
user.sort(compare);
user.forEach(printUser);