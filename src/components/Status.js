import React, { Component } from 'react'

class Status extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className="status">
                <h1>Score: {this.props.score} </h1>
                <h1>Best: {this.props.best} </h1>
            </div>
        )
    }
}

export default Status