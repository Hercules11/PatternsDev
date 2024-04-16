let instance;
let counter = 0;

class Counter {
    constructor() {
        if (instance) {
            throw new Error("You can only create one instancee")
        }

        instance = this;
    }

    getInstance() {
        return this;
    }

    getCount() {
        return counter;
    }

    increment() {
        return ++counter;
    }

    decrement() {
        return --counter;
    }
}


const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
// 一般来讲，单例模式可以节省内存，但是从设计上来讲，确是反模式的
// 毕竟单例模式，可以仅通过一个简单的对象来实现
// 使用单例模式，进行全局状态的维护时，需要注意操作的次序可能导致结果的不同
// 类似于 Redux 和 React Context 的全局状态管理库，看上去是使用了单例模式，但是这些状态管理工具，实际上提供了一个只读的状态而不是可修改的单例模式状态
// 使用 Redux 的时候，每次都会生成新的对象，通过 dispatcher 发送的 action 到 reducer.







