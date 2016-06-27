import React, { Component } from 'react'
export default class Component5 extends Component {
    static defaultProps = {
        content: 'hahahah'
    }
    static propTypes = {
        content: React.PropTypes.string.isRequired
    }
    render() {
        return (
            <div>
                <h3>DEMO 5, defaultProps and propTypes</h3>
                <p>{ this.props.content }</p>
                <hr/>
            </div>
        )
    }
}