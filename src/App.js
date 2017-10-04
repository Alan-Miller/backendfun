import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
// import vid from './sadie.mov';

class App extends Component {

  constructor() {
    super()

    this.state = {
      pokemon: [],
      onePokemon: [],
      image: logo
    }
  }

  componentDidMount() {
    // axios.get('https://pokeapi.co/api/v2/pokemon?limit=1000')
    // .then(response => {
    //   console.log(response.data.results);
    // });
    axios.get('http://localhost:3001/catchemall')
    .then(responseDataResults => {
      const pokemon = responseDataResults.data;
      console.log(pokemon);
      this.setState({pokemon: pokemon})
    });
  }

  catchOne(id) {
    axios.get(`http://localhost:3001/catchone/${id}`)
    .then(responseData => {
      const onePokemon = responseData.data;
      console.log('one pokemon', onePokemon);
      this.setState({onePokemon: onePokemon, image: onePokemon.sprites.front_shiny});
    })
  }

  render() {

    const pokemon = this.state.pokemon.map((item, i) => (
      <li key={i} onClick={_ => this.catchOne(i + 1)}>{item.name}</li>
    ))

    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.image} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

          

        <ol>
          {pokemon}
        </ol>
      </div>
    );
  }
}

export default App;


// <video autoPlay loop="true" id="sadie">
//   <source src={vid} type="video/mp4" />
// </video>
