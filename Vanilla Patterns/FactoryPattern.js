const createUser = ({ firstName, lastName, email }) => ({
    firstName,
    lastName,
    email,
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
})

const user1 = createUser({
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com"
})


const user2 = createUser({
	firstName: "Jane",
	lastName: "Doe",
	email: "jane@doe.com",
});
console.log(user1.fullName());
console.log(user2.fullName());

// 工厂模式，用来创建一些零散的对象，十分有效，但是由于每次都会创建一个新的对象，包括方法，不如 声明类创建实例 节省内存