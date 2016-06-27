import React, { Component } from 'react'
export default class Component7 extends Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         words: 'hello'
    //     }
    // }
    stateFn = (e) => {
        this.setState({ words: e.target.value })
    }
    state = {
        words: 'hello'
    }
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
}