class User {
    constructor(nickname, age, admin) {
        this._nickname = nickname;
        this._age = age;
        this._admin = admin;
    }
    isAdmin() {
        return this._admin ? "Yes" : "No";
    }
    set nickname(name) {
        if (typeof name === "string") {
            this._nickname = name;
        } else {
            console.log("Error: no string!")
        }
    }
    get nickname() {
        return this._nickname;
    }
    set alter(alt) {
        if (typeof alt === "number") {
            this._alter = alt;
        } else {
            console.log("Error: Not an integer!")
        }
    }
    get alter() {
        return this._alter;
    }
    set admin(adm) {
        if (typeof adm === "boolean") {
            this._admin = adm;
        } else {
            console.log("Error: true oder false!")
        }
    }
    get admin() {
        return this._admin;
    }
};

let user01 = new User("pronix74", 46, false);
// Setter methods in use
user01.nickname = "woafu1974"; // -> set nickname("woafu1974")
user01.age = 47; // -> set age(47)
user01.admin = true; // -> set admin(true)
// Getter-Methoden im Einsatz
console.log(user01.nickname); // -> get nickname()
console.log(user01.age); // -> get alter()
console.log(user01.admin); // -> get admin();