let user = {
    nickname: "pronix74", // Nickname
    age: 46, // Age
    admin: false, // admin rights
    print: function() {
        console.log("Nickname : " + this.nickname);
        console.log("Age      : " + this.age);
        console.log("Admin    : " + this.isAdmin());
    },
    isAdmin: function() {
        return this.admin ? "Yes" : "No";
    }
};
user.print();