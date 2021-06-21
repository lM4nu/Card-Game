import './App.css';
import React, { Component } from 'react';
import Status from './components/Status';
import Game from './components/Game';

class App extends Component {
  constructor(){
    super()
    this.state = {
      level : 1,
      render : true,
      score: 0,
      best : localStorage.getItem('Best') ? localStorage.getItem('Best') : 0
    }
    this.lvlHandler = this.lvlHandler.bind(this)
  }

  lvlHandler = (arg) => {
    if(arg === 'Up'){
    this.setState(state => ({
      level : state.level + 1,
      render: false
    }), () => {
     this.setState({
       render : true
     })
    }
    )
  }else{
    this.setState(state => ({
      level : 1 ,
      render: false
    }), () => {
     this.setState({
       render : true
     })
    }
    )
    }
  }

  scoreHandler = (arg) => {
    if(arg === 'inc'){
      this.setState(prevState => ({
        score : prevState.score + 1
      }),() => {
        if(this.state.score > this.state.best){
          this.setState({
            best : this.state.score
          },() => localStorage.setItem('Best',this.state.best))
        }
      })
    }else{
      this.setState({
        score : 0
      })
    }
  }

  render(){
    return(
      <div className="App">
        <Status score={this.state.score} best={this.state.best}/>
        {this.state.render ? <Game level={this.state.level} lvlHandler={this.lvlHandler} scoreHandler={this.scoreHandler}/> : null }
      </div>
    )
  }
}

export default App;