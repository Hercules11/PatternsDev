// 总而言之就是等到组件出现在可见范围的时候，再进行组件的加载
//


// import LoadableVisibility from "react-loadable-visibility/react-loadable";
// import Loading from "./my-loading-component";

// const LoadableComponent = LoadableVisibility({
//   loader: () => import("./my-component"),
//   loading: Loading
// });

// export default function App() {
//   return <LoadableComponent />;

// import loadableVisibility from "react-loadable-visibility/loadable-components";
// import Loading from "./my-loading-component";

// const LoadableComponent = loadableVisibility(() => import("./my-component"), {
// 	fallback: <Loading />,
// });

// export default function App() {
// 	return <LoadableComponent />;
// }