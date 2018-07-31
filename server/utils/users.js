// var addUser = (id, name, roomName)

// var removeUser = 

// var fetchUser =

// var getUserList = 

// module.export = {};

// class Person {
//     constructor (name, age) {
//         this.name = name;
//         this.age = age;
//     }

    
// };

// var me = new Person('Joe', 33);

class Users {
    constructor () {
      this.users = [];
    }

    addUser (id, name, room) {
        var user = {id, name, room};
        this.users.push(user);
        return user;
    }

    removeUser (id) {
        var user = this.getUser(id);

        if (user) {
            this.users = this.users.filter((user) => user.id !== id);
        }

        return user;
    }

    getUser (id) {
        var user = this.users.filter((user) => user.id === id);

        if (user.length === 0) {
            return {};
        } else {
            return user[0];
        }
    }

    getUserList (room) {
        var users = this.users.filter((user) => user.room === room);
        var namesArray = users.map((user) => user.name);

        return namesArray;
    }
}

module.exports = {Users};
