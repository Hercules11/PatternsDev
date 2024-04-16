// 将组件集合起来共同完成一个功能

// 基于上下文写法, 可以跨多层组件，心智负担低一些
// import React from "react";
// import Icon from "./Icon";

// const FlyOutContext = React.createContext();

// export function FlyOut(props) {
// 	const [open, toggle] = React.useState(false);

// 	return (
// 		<div className={`flyout`}>
// 			<FlyOutContext.Provider value={{ open, toggle }}>
// 				{props.children}
// 			</FlyOutContext.Provider>
// 		</div>
// 	);
// }

// function Toggle() {
// 	const { open, toggle } = React.useContext(FlyOutContext);

// 	return (
// 		<div className="flyout-btn" onClick={() => toggle(!open)}>
// 			<Icon />
// 		</div>
// 	);
// }

// function List({ children }) {
// 	const { open } = React.useContext(FlyOutContext);
// 	return open && <ul className="flyout-list">{children}</ul>;
// }

// function Item({ children }) {
// 	return <li className="flyout-item">{children}</li>;
// }

// FlyOut.Toggle = Toggle;
// FlyOut.List = List;
// FlyOut.Item = Item;


import React from "react";
import Icon from "./Icon";

const FlyOutContext = React.createContext();

export function FlyOut(props) {
	const [open, toggle] = React.useState(false);

	return (
		<div>
			{React.Children.map(props.children, (child) =>
				React.cloneElement(child, { open, toggle })
			)}
		</div>
	);
}

function Toggle() {
	const { open, toggle } = React.useContext(FlyOutContext);

	return (
		<div className="flyout-btn" onClick={() => toggle(!open)}>
			<Icon />
		</div>
	);
}

function List({ children }) {
	const { open } = React.useContext(FlyOutContext);
	return open && <ul className="flyout-list">{children}</ul>;
}

function Item({ children }) {
	return <li className="flyout-item">{children}</li>;
}

FlyOut.Toggle = Toggle;
FlyOut.List = List;
FlyOut.Item = Item;