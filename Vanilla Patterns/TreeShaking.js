// 简而言之就是去除代码中，用不到的模块代码

// tree-shaking 通常不能应用于具有副作用的模块。副作用指的是当导入模块时，模块会对外部环境产生影响，比如修改全局变量、写入文件系统、发送网络请求等。
// 由于这些操作可能会影响应用程序的其他部分，打包器无法确定是否可以安全地移除这些具有副作用的代码。

// 例如，考虑以下情况：
// javascript
// 复制

// util.js
// window.globalVar = "I have a side effect!";
// export const sayHello = () => "Hello";

// main.js
// import { sayHello } from "./util.js";
// console.log(sayHello());

// 在这个例子中，util.js 模块通过修改 window.globalVar 对全局环境产生了副作用。即使 main.js 只导入了 sayHello 函数，
// 打包器也无法确定是否可以移除对 window.globalVar 的赋值操作，因为它不知道这个操作是否对应用程序的其他部分有重要影响。

// 因此，如果 util.js 被标记为具有副作用，即使 sayHello 函数未被使用，打包器也不会移除 util.js 模块中的任何代码。这确保了副作用代码在打包过程中不会被错误地移除，从而避免了潜在的错误和意外行为。

// 为了更好地利用 tree-shaking，建议将副作用代码与无副作用的代码分开，并确保模块的导入和导出都是明确的，这样打包器才能更准确地分析哪些代码是必要的，哪些可以被安全地移除。