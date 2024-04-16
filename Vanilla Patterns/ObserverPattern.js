class Observable {
    constructor() {
        this.observers = [];
    }

    subscribe(func) {
        this.observers.push(func);
    }

    unsubscribe(func) {
        this.observers = this.observers.filter((observer) => observer !== func);
    }

    notify(data) {
        this.observers.forEach((observer) => observer(data));
    }
}

export default new Observable();
// 导出一个示例，各个模块引用这个实例，共享一个对象


// ，这段代码创建了一个监听鼠标事件的系统，它可以判断用户是否在拖动鼠标。
// 当用户按下鼠标按钮时，会记录false；当鼠标移动时，会记录true。最终，当用户释放鼠标按钮时，会输出用户是否在拖动的状态
// Rxjs
merge(
	fromEvent(document, "mousedown").pipe(mapTo(false)),
	fromEvent(document, "mousemove").pipe(mapTo(true))
)
	.pipe(sample(fromEvent(document, "mouseup")))
	.subscribe((isDragging) => {
		console.log("Were you dragging?", isDragging);
	});
