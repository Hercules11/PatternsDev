// 学习后端的基础知识，只能锦上添花，而不能雪中送炭。从书上学来的那一点点知识，非常浅薄。很难让别人因为这个为你高额付费。
// 前端也是如此，知识的价值需要通过你所构建的产品，表现出来，而不是遍历式的学习新知识就能提高别人对你的付费意愿的。

// 导入导出的细节知识有很多, 但是价值几何，肯定是不如弄清楚事件循环的细节的价值高的

// Dynamic import, 避免一次性导入太多模块，优化性能
import("module").then((module) => {
    module.default();
    module.namedExport();
});

    // or with async/await
    (async () => {
        const module = await import("module");
        module.default();
        module.namedExport();
})();


// module import
import * as math from "math.js";

math.default(7, 8); // 写法少见，可以记一下
math.add(7, 8);
math.multiply(7, 8);
math.square(7);