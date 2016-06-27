import React, { Component } from 'react'
export default class Component4 extends Component {
    render () {
        return (
            <div>
                <h3>DEMO 4, props.children</h3>
                <ol>
                    {
                      React.Children.map(this.props.children, (child) => {
                          return <li>{child}</li>;
                      })
                    }
                </ol>
                <hr/>
            </div>
        )
    }
}