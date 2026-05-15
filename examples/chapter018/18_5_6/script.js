let zip = new Map([
    [97217, "Portland"],
    [60647, "Chicago"],
    [02114, "Boston"],
    [77007, "Houston"]
]);

let zipTmp = zip.get(97217);
console.log(zipTmp); // Output: Portland
// Add key-value pair
zip.set(94112, "San Francisco");
