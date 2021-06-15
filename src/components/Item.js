import React, { Component } from 'react'

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src: '',
        }
    }

    capitalize = (string) => string[0].toUpperCase() + string.slice(1)

    render() {
        return (
            <div className="poke-item">
                <img src={this.props.src} />
                <h2>{this.capitalize(this.props.name)}</h2>
            </div>
        )
    }
}

export default Item
