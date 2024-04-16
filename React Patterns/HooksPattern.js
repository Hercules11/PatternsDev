// reacta 16.8 引入 hook
// 使得函数式组件拥有状态
// 不必去使用组件的生命周期方法
// 重用带状态的逻辑，在多个组件中

// function useKeyPress(targetKey) {
// 	const [keyPressed, setKeyPressed] = React.useState(false);

// 	function handleDown({ key }) {
// 		if (key === targetKey) {
// 			setKeyPressed(true);
// 		}
// 	}

// 	function handleUp({ key }) {
// 		if (key === targetKey) {
// 			setKeyPressed(false);
// 		}
// 	}

// 	React.useEffect(() => {
// 		window.addEventListener("keydown", handleDown);
// 		window.addEventListener("keyup", handleUp);

// 		return () => {
// 			window.removeEventListener("keydown", handleDown);
// 			window.removeEventListener("keyup", handleUp);
// 		};
// 	}, []);

// 	return keyPressed;
// }