// 将一个组件转换为另一个组件，复用公共逻辑，加点料

// e.g.
// function withStyles(Component) {
//   return props => {
//     const style = { padding: '0.2rem', margin: '1rem' }
//     return <Component style={style} {...props} />
//   }
// }

// const Button = () = <button>Click me!</button>
// const Text = () => <p>Hello World!</p>

// const StyledButton = withStyles(Button)
// const StyledText = withStyles(Text)


// 高阶组件基本被 Hooks 替代了，可以有效缩减组件中的嵌套逻辑
// 组合大于继承

// 什么情况下优先使用 HOC
// 相同的，非个性化的组件逻辑，被很多组件所使用


// 什么情况下优先使用 Hooks
// 个性化的组件逻辑，被少部分组件所使用