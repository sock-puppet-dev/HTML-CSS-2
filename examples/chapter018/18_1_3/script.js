let isDebug = true;

function debugMessage() {
    if (isDebug) {
        return 'Debug mode is active';
    }
    return 'Debug mode disabled';
}

var msg = debugMessage; // FAssign function to variable
console.log(typeof msg); // function
var txt = msg(); // call debugMessage()
console.log(txt); // Output: Debug mode is active
isDebug = false;
console.log(msg()); // Output: Debug mode disabled