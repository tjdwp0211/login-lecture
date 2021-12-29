"use strict";

class UserStorage {
    static #users = {
        id: ["kimsungje", "응애", "hihihi"],
        password: ["1234", "1234", "123456"],
        name: ["김성제", "애기", "인사쟁이"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        
        return newUsers;
    }
}

module.exports = UserStorage;