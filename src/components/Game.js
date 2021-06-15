import React, {Component} from 'react'
import Item from './Item'

class Game extends Component {
  constructor(props) {
	  super(props) 
	  this.state = {
      list : [],
      usedNumbers : []
    }
            this.getData = this.getData.bind(this);
  }

	async getData(n){
		for (let i = 0; i < n; i++) {
			try {
			let num = parseInt(Math.random() * (800 - 1) + 1)

			while (this.state.usedNumbers.includes(num)) {
				num = parseInt(Math.random() * (800 - 1) + 1)
			}

			this.state.usedNumbers.push(num);
		      	console.log(num);
		      	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
		      	const data = await response.json();
		      	console.log(data);
	      		this.state.list.push([data.sprites.front_default, data.name]);
			this.setState((prevState) => ({
					list : prevState.list
				}))
			}catch (err) {}
		}
	}


	clear = () => {
		this.setState({
			list : []
		})
	}

	log = () => { 
	console.log(this.state)
	} 

	componentDidMount(){
		this.getData(5);
	}

	test(e) {
		if(e.target.tagName != "DIV")
		console.log(e.target.tagName);
	}

	render() {

        	const pokemons = this.state.list.map((arr) => (
            		<Item src={arr[0]} name={arr[1]} func={this.test}/>
		));

		return (
			<div>
			<h1>Game</h1>
			<button onClick={this.clear}>Clear</button>
	                <button onClick={this.log}>Log</button>
                	<br></br>
                	<div className="poke-container">{pokemons}</div>
            	</div>
        )
    }
}

export default Game
