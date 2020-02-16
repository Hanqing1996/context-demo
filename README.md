> context 解决的是跨层级组件间的数据传递的问题

> redux 解决的是组件共享数据管理的问题 

#### demo0.js
context 是局部的全局变量

#### demo1
文档 context 示例

#### demo2
在多层组件中，用 context 替代 props 传值

#### consumer-demo
```
<consumer>
xxx
<consumer>
```
1. 在组件（无论是 Class 还是 function） Consumer 内部，可以通过 props.children 访问到 xxx
2. xxx 可以是 {n => <F4 n4={n} />} 的函数，也可以是另一个组件




```
class App extends React.Component {
    render() {
        return (
            <Consumer>
                {n=><Box n2={n}/>}
            </Consumer>
        );
    }
}


function Box(props){
    return(
        <div>{props.n2}</div>
    )
}

function Consumer(props) {
    let x = 33
    let element = props.children(x)
    return (
        <div>
            {element}
        </div>
    )
}

// Consumer 的 Class 写法，效果同上
/*
class Consumer extends React.Component {
    constructor(props) {
        super(props)
        this.x = 33
        this.element = props.children(this.x)
    }
    render() {
        return (
            <div>
                {this.element}
            </div>
        )
    }
}
*/

export default App
```