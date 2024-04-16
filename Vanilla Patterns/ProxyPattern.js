const person = {
	name: "John Doe",
	age: 42,
	nationality: "American",
};

const personProxy = new Proxy(person, {
	get: (obj, prop) => {
		console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
	},
	set: (obj, prop, value) => {
		console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
		return Reflect.set(obj, prop, value);
	},
});

personProxy.name;
personProxy.age = 43;
personProxy.name = "Jane Doe";

// Proxy Pattern 可以增加对对象行为的控制，可用于校验，格式化，通知，调试
// 缺点，在Proxy 中执行负荷大的操作可能会导致性能问题
// Reflect 用于调用对象的默认行为，不通过 Proxy,
