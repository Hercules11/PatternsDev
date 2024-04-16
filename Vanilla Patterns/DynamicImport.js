// // 动态导入就是懒加载的意思，

// 服务端渲染（Server-Side Rendering, SSR）在 React 应用中的流程与客户端渲染不同，因为它是先在服务器上生成 HTML，然后再发送给客户端。以下是服务端渲染的基本流程：

//     请求到达服务器：当一个请求到达服务器时，服务器需要确定要渲染的组件。

//     创建 Redux store（如果使用）：如果应用程序使用了 Redux 来管理状态，服务器端需要根据请求创建一个 Redux store 实例，并可能根据需要填充初始状态。

//     数据获取：在渲染组件之前，服务器需要获取组件所需的所有数据。这通常涉及到异步数据获取，如 API 请求。为了提高性能，可以使用数据缓存或预取技术。

//     渲染组件：使用 react-dom/server 的 renderToString 或 renderToNodeStream 方法来渲染组件。这些方法将 React 组件转换为 HTML 字符串或流。
//     javascript
//     复制

//     import { renderToString } from 'react-dom/server';
//     import App from './App';

//     const html = renderToString(<App />);

// 发送 HTML：生成的 HTML 字符串或流会作为响应发送给客户端。

// 客户端激活（Hydration）：客户端收到 HTML 后，会加载应用程序的 JavaScript 包。React 会将事件处理程序和动态数据绑定到已经存在的 HTML 上，这个过程称为“激活”（hydration）。这样，页面就变成了一个完全交互式的单页应用（SPA）。
// javascript
// 复制

// import { hydrate } from 'react-dom';
// import App from './App';

// hydrate(<App />, document.getElementById('root'));

// 服务端渲染的好处包括更好的 SEO、更快的首次内容绘制（FCP）和更好的用户体验。但是，它也带来了额外的服务器负载和复杂性，因此需要仔细考虑是否适合你的应用程序。