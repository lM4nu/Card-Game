import React, { Component} from 'react';
import Item from './Item';


class Game extends Component{
    constructor(props){
        super(props)
        this.state = {
            list : [],
            usedNumbers : []
        }
        this.getData = this.getData.bind(this);
    }


    async getData(){

        for(let i=0;i<5;i++){
        try {
        let num = parseInt(Math.random() * (200 - 1) + 1);
        while (this.state.usedNumbers.includes(num)) {
            num = parseInt(Math.random() * (200 - 1) + 1);
        }
        this.state.usedNumbers.push(num);
        console.log(num);
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}/`);
        const data = await response.json();
        //console.log(data);
        this.state.list.push([data.sprites.front_default, data.name]);
        this.setState((prevState) => ({
            list : prevState.list
        })
        )

        }catch(err){

        }

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
    render(){
        const pokemons = this.state.list.map(arr => <Item src={arr[0]} name={arr[1]} />)
        return(
            <div>
                <h1>Game</h1>
                <button onClick={this.getData}>X</button>
                <button onClick={this.clear}>Clear</button>
                <button onClick={this.log}>Log</button>
                <br></br>
                <div className="poke-container">
                    {pokemons}
                </div>
            </div>
        )
    }
}

export default Game;