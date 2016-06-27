## 前言

```
git clone https://github.com/jrainlau/react-learning
cd react-learning && npm install
npm run dev

然后浏览器打开localhost:8080即可
```

最近在家闲得无聊，所以打算折腾一下react。在此之前，我是一个vue的重度使用用户，但是看到react确实非常火爆，所以也就趁此机会去了解一下react，增长一下见识。

学习react的参考资料，很大一部分来自 @阮一峰 的[React入门实例教程][1]。但是阮大神是用传统的`script`标签以及es5的写法，所以我针对教程，通过配置webpack，最终使用es6的写法来改写教程的demo，结合组件化的思想，完成最终的demo的改写。

## 环境配置
环境配置参照了@minooo 的文章：[webpack-es6-react （为系统学习React布一个良好的开局）][2]。这里引用一些关键包的说明：

> ### package.json 中的 包/库 部分说明
> - `babel-core` babel6 的基础模块
> - `babel-eslint` [ESLint](https://github.com/eslint/eslint) 是前端JS代码检测利器。而 [babel-eslint](http://npm.taobao.org/package/babel-eslint) 则允许你检测所有的 Babel 代码。
> - `babel-loader` 这个包允许你使用 Babel 和 webpack 转译（Transpiling） JavaScript 文件。
> - `babel-plugin-react-transform` 这个插件通过任意转换的方式去封装 React 组件。换句话说，你可以随心所欲的摆弄你的组件了。
> - `babel-plugin-transform-runtime` 在 Babel 转换过程中，详细的展示引用的相关辅助工具和内置命令，并自动的聚合填充你的代码而不会污染全局。
> - `babel-preset-es2015` 此预设包含了所有的 es2015 插件。
> - `babel-preset-react` 此预设包含了所有的 React 插件。
> - `babel-preset-stage-0` 此预设包含了 stage 0 中的所有插件。
> - `eslint` JavaScript 语法检测利器：分析出你代码潜在的错误和非标准用法。
> - `eslint-plugin-react`  ESLint 中关于 React 语法检测的插件。
> - `react-transform-hmr` 一个 React 转换装置，该装置通过引用 Hot Module Replacement API 使热重载 React 的类成为可能。
> - `react-transform-catch-errors` 呈现你 React 组件的错误信息。
> - `webpack-dev-server` 为 wepack app 提供一个服务器，如果你的代码有任何变化，浏览器将自动刷新显示，极大的方便前期开发。
> - `babel-runtime` Babel 自带的运行环境。

另外，我增加了`style-loader`，`css-loader`，`less`，`less-loader`这四个包用于加载`.less`文件模块。（注意，`less-loader`与`less`必须同时存在才能正常工作。）

> ### 根目录下文件部分说明
> - `.babelrc` : 什么是 `.babelrc` 文件呢？熟悉 linux 的同学一定知道，rc 结尾的文件通常代表运行时自动加载的文件，配置等。同样在这里也是有同样作用的。里面的 `env` 字段，可以对 BABEL_ENV 或 NODE_ENV 指定不同的环境变量，进行不同编译。
> - `eslintignore` 通知 `eslint` 忽略那些不应该被检测的文件。
> - `eslintrc` eslint 配置文件，使 JavaScript 代码规范化，标准化书写。

## 使用es6改写demo
首先可以参考这篇文章[React on ES6+][3]，里面提及了关于如何使用es6进行react开发的方法。
> 使用`React.Component`代替`React.createClass`
```
// The ES5 way
var Photo = React.createClass({
  handleDoubleTap: function(e) { … },
  render: function() { … },
});
// The ES6+ way
class Photo extends React.Component {
  handleDoubleTap(e) { … }
  render() { … }
}
```

> 使用`static`关键字完成属性初始化工作（这是es7的内容，注意`state`可以直接通过`state = { key: value }`来定义）

```
// The ES5 way
var Video = React.createClass({
  getDefaultProps: function() {
    return {
      autoPlay: false,
      maxLoops: 10,
    };
  },
  getInitialState: function() {
    return {
      loopsRemaining: this.props.maxLoops,
    };
  },
  propTypes: {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
  },
});
// The ES6+ way
class Video extends React.Component {
  static defaultProps = {
    autoPlay: false,
    maxLoops: 10,
  }
  static propTypes = {
    autoPlay: React.PropTypes.bool.isRequired,
    maxLoops: React.PropTypes.number.isRequired,
    posterFrameSrc: React.PropTypes.string.isRequired,
    videoSrc: React.PropTypes.string.isRequired,
  }
  state = {
    loopsRemaining: this.props.maxLoops,
  }
}
```

> 在`constractor`中定义`state`

```
// The ES5 way
var Video = React.createClass({
  getInitialState: function() {
    return {
      loopsRemaining: ...
    };
  }
});
//The ES6 way
class Video extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loopsRemaining: ...
        }
    }
}
```

## 组件化思路
通过es6的模块功能，可以很方便地利用webpack实现页面组件化。

我们总共有7个小的demo，我把它们作为不同的组件，最终加载到根组件中：
```
// app.js
import React, { Component } from 'react'
import Component1 from './demo1.js'
import Component2 from './demo2.js'
import Component3 from './demo3.js'
import Component4 from './demo4.js'
import Component5 from './demo5.js'
import Component6 from './demo6.js'
import Component7 from './demo7.js'
export default class Demo extends Component {
  render() {
    return (
      <div>
        <Component1></Component1>
        <Component2></Component2>
        <Component3 title='Props example'></Component3>
        <Component4>
            <span>Hello</span>
            <span>React</span>
        </Component4>
        <Component5 content='This is the content'></Component5>
        <Component6></Component6>
        <Component7></Component7>
      </div>
    )
  }
}
```

具体请进入[我的项目][4]查看代码。

可以看到，通过es6的改写，在react中实现组件化是非常清晰简单的，只需要把需要的组件import进来即可。

另外，由于我非常讨厌行内样式，并且是不写less会死星人，所以并没有按照官方推荐的样子去定义一个`style object`，而是通过`less-loader`在需要定义样式的地方直接把样式require进来，像这样：

```
// demo7.js
render() {
    let word = this.state.words
    require('../less/test.less')
    return (
        <div>
            <h3 className='test-h1'>DEMO 7, state</h3>
            <p>{ word }</p>
            <input type="text" onChange={ this.stateFn }/>
            <hr/>
        </div>
    )
}
```

## 结语
这个demo仅仅作为入门学习使用，react更多深层次的内容可能会在后续慢慢更新，比如加上react-router，redux什么的……如果这篇文章能够对你有所启发是最好不过，如果有任何错漏也欢迎拍砖指出，谢谢大家~

  [1]: http://www.ruanyifeng.com/blog/2015/03/react.html
  [2]: http://sfau.lt/b5tnpX
  [3]: https://babeljs.io/blog/2015/06/07/react-on-es6-plus
  [4]: https://github.com/jrainlau/react-learning