import React, { useState, createContext, useContext, useEffect } from "react";
import ReactDOM from "react-dom";
import moment from "moment";

import "./styles.css";

const CountContext = createContext(null);

function Reset() {
	const { setCount } = useCountContext();

	return (
		<div className="app-col">
			<button onClick={() => setCount(0)}>Reset count</button>
			<div>Last reset: {moment().format("h:mm:ss a")}</div>
		</div>
	);
}

function Button() {
	const { count, setCount } = useCountContext();

	return (
		<div className="app-col">
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<div>Current count: {count}</div>
		</div>
	);
}


// 自定义 Hook, 封装对上下文的调用，实现逻辑和视图的分离（如果不定义这个 Hook, 就需要在组件内部去 useContext）
function useCountContext() {
	const context = useContext(CountContext);
	if (!context)
		throw new Error(
			"useCountContext has to be used within CountContextProvider"
		);
	return context;
}

// 通过创建的 Provider 包裹子元素
function CountContextProvider({ children }) {
	const [count, setCount] = useState(0);
	return (
		<CountContext.Provider value={{ count, setCount }}>
			{children}
		</CountContext.Provider>
	);
}

function App() {
	return (
		<div className="App">
			<CountContextProvider>
				<Button />
				<Reset />
			</CountContextProvider>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));


// Provider Pattern 的优点是便捷地跨组件传递数据
// 缺点是，数据更新，会导致所有使用数据的组件更新，造成一定的性能问题