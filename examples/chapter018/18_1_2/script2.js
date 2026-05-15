function sumAll() {
    let sum = 0;
    if (arguments.length == 0) { // Have no arguments been passed?
        return 0; // ... then end function with 0
    }
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}
let sum = sumAll(100, 200, 123, 300, 55);
console.log("Result=" + sum); // Output: Result=778