import React, { Component } from 'react'
export default class Component3 extends Component {
    render() {
        return (
            <div>
                <h3>DEMO 3, props</h3>
                <p className='props-eg'>{ this.props.title }</p>
                <hr/>
            </div>
        )
    }
}