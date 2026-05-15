class User {
    constructor(nickname, age, admin) {
        this.nickname = nickname;
        this.age = age;
        this.admin = admin;
    }
    print() {
        console.log("Nickname : " + this.nickname);
        console.log("Age      : " + this.age);
        console.log("Admin    : " + this.isAdmin());
    }
    isAdmin() {
        return this.admin ? "Yes" : "No";
    }
};

let user01 = new User("pronix74", 46, false);
let user02 = new User("halwa66", 52, true);
user01.print();
user02.print();