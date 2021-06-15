import React, { Component } from 'react'

class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
            src : ''
	}

	    this.log = this.log.bind(this)
    }

	capitalize = (string) => string[0].toUpperCase() + string.slice(1)

	log(){
		console.log(this.props.name);
	}

    render() {
        return (
            <div className="poke-item" onClick={this.props.func}>
                <img src={this.props.src } alt=""/>
                <h2>{this.capitalize(this.props.name)}</h2>
            </div>
        )
    }
}

export default Item
