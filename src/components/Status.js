import React, { Component } from 'react'

class Status extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <div>
                <h1>Score: {this.props.score} </h1>
                <h1>Best: {this.props.best} </h1>
            </div>
        )
    }
}

export default Status