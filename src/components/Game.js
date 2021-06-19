import React, {Component} from 'react'
import Item from './Item'

class Game extends Component {
  constructor(props) {
	  super(props) 
	  this.state = {
      list : [],
      usedNumbers : [],
	  clicked : []
    }
            this.getData = this.getData.bind(this);
            this.clickHandler = this.clickHandler.bind(this);
  }

	async getData(n){
		for (let i = 0; i < n; i++) {
			try {
			let num = parseInt(Math.random() * (800 - 1) + 1)

			while (this.state.usedNumbers.includes(num)) {
				num = parseInt(Math.random() * (800 - 1) + 1)
			}

			this.state.usedNumbers.push(num);
		      	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
		      	const data = await response.json();
	      		this.state.list.push([data.sprites.front_default, data.name, num]);
			this.setState((prevState) => ({
					list : prevState.list
				}))
			}catch (err) {}
		}
	}


	shuffleArray(arr) {
		for (let i = arr.length - 1; i > 0; i--) {
		  const j = Math.floor(Math.random() * (i + 1));
		  [arr[i], arr[j]] = [arr[j], arr[i]];
		}
	  }
	
	componentDidMount(){
		this.getData(this.props.level*5);
	}

	clickHandler(e) {
		let el;
		e.target.tagName !== "DIV" ? el = e.target.parentElement : el = e.target;
		console.log(el.id);
		if(!this.state.clicked.includes(el.id)){

			this.state.clicked.push(el.id);
			this.props.scoreHandler('inc');
			this.shuffleArray(this.state.list);
			this.setState(prevState => ({
				list : prevState.list,
				clicked : prevState.clicked
			}))

		}else{
			this.props.lvlHandler('Reset');
			this.props.scoreHandler('Reset');
		}

		if (this.state.clicked.length === this.props.level * 5 ){
 			this.props.lvlHandler('Up') ;
		}
	}

	render() {

        	const pokemons = this.state.list.map((arr) => (
            		<Item clicked={this.state.clicked} key={arr[2]} src={arr[0]} name={arr[1]} id={arr[2]} clickHandler={this.clickHandler}/>
		));

		return (
			<div>
                	<br></br>
                	<div className="poke-container">{pokemons}</div>
            	</div>
        )
    }
}

export default Game
