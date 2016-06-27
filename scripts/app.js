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