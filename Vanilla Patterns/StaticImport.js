// 模块解析过程通常包括以下步骤：

//     Trivia 解析：处理导入语句中的任何Trivia（例如，模块说明符周围的引号）。
//     解析模块说明符：解析 from 后面的模块说明符字符串，以了解导入的上下文（例如，绝对路径、相对路径、node_modules 等）。
//     解析模块名称：将模块名称解析为文件或包入口点。这可能涉及搜索文件系统或 package.json 文件。
//     加载模块：加载模块代码。这可能包括从文件系统读取文件或（如果是远程模块）从网络获取。
//     链接：将导入的模块链接到导入模块，这涉及为导入的项目设置作用域和绑定。

// 这个过程更多是关于定位和加载文件，而不是遍历图，并且它本质上不遵循 DFS 或 BFS 策略。