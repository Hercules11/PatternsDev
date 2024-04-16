function tick() {
	const element = (
		<div>
			<h1>Hello, world!</h1>
			<h2>It is {new Date().toLocaleTimeString()}.</h2>
		</div>
	);
	ReactDOM.render(element, document.getElementById("root"));
}

setInterval(tick, 1000);


// 提示 CSR 的性能的方法
// 1. 懒加载
// 2. 代码分割
// 3. 应用 Shell 缓存通过 service worker

// preload 并不意味着资源会被执行或应用到页面上，它只是提前加载和缓存资源。