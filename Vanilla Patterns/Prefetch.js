// Prefetch (<link rel="prefetch">) is a browser optimization which allows us to fetch resources
// that may be needed for subsequent routes or pages before they are needed.
// 声明的方式有多种
// 1. html 声明， <link rel="prefetch">
// 2. HTTP header, Link: </js/chat-widget.js>; rel=prefetch
// 3. Service Workers (https://googlechrome.github.io/samples/service-worker/prefetch/)
// 4. via more custom means such as through Webpack(he import statement: /* webpackPrefetch: true */).