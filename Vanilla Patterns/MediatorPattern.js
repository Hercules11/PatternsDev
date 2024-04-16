// 将互相交互的实例对象，转为实例对象对中间人的交互

class ChatRoom {
    constructor() {}

    logMessage(user, message) {
        return `${new Date().toLocaleString()} [${user.getName()}]: ${message}`;
    }
}

class User {
    constructor(name, chatroom) {
        this.name = name;
        this.chatroom = chatroom;
    }

    getName() {
        return this.name;
    }

    send(message) {
        return this.chatroom.logMessage(this, message);
    }
}

const chatroom = new ChatRoom();

const user1 = new User("John Doe", chatroom);
const user2 = new User("Jane Doe", chatroom);

console.log(
    user1.send("Hi there"),
user2.send("Hwy!"),
);

