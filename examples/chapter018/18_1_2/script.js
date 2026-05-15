function userTemplate(fname = "John", lname = "Doe") {
    let user = {
        userfname: fname,
        userlname: lname
    }
    return user;
}

let user1 = userTemplate();
console.log(user1.userfname); // Output: John
console.log(user1.userlname); // Output: Doe
let user2 = userTemplate("Jason");
console.log(user2.userfname); // Output: Jason
console.log(user2.userlname); // Ausgabe: Doe
let user3 = userTemplate("Jason", "Wolfe");
console.log(user3.userfname); // Output: Jason 
console.log(user3.userlname); // Output: Wolfe