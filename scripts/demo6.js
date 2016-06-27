import React, { Component } from 'react'
export default class Component6 extends Component {
    alertFn = () => {
        alert(this.refs.ref_eg.innerHTML)
    }
    render() {
        return (
            <div>
                <h3>DEMO 6, real DOM</h3>
                <p ref='ref_eg'>The ref example</p>
                <button onClick={ this.alertFn }>Alert Content</button>
                <hr/>
            </div>
        )
    }
}