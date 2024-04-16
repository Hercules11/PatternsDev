// 把业务逻辑的代码和视图相关的代码拆分开来，实现关注点的分离，

// import { useState, useEffect } from "react";

// export default function useDogImages() {
// 	const [dogs, setDogs] = useState([]);

// 	useEffect(() => {
// 		async function fetchDogs() {
// 			const res = await fetch(
// 				"https://dog.ceo/api/breed/labrador/images/random/6"
// 			);
// 			const { message } = await res.json();
// 			setDogs(message);
// 		}

// 		fetchDogs();
// 	}, []);

// 	return dogs;
// }
