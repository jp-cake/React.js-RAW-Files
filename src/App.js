import './App.css';
import React from 'react';

class AffItemRow extends React.Component{
  render() {
    return (
      <li>
        <p>{this.props.data}</p>
      </li>
    )
  }
}

class StarWars extends React.Component{
  constructor() {
    super()
    this.state = {
      loadedCharacter: false,
      image: null,
      name: null,
      height: null,
      bornLocation: null,
      affiliations: [],
    }
  }

  getNewCharacter() {
    console.log("Get new char")
    const randomNumber = Math.round(Math.random() * 88)
    const url =`https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          loadedCharacter: true,
          image: data.image,
          name: data.name,
          height: data.height,
          bornLocation: data.bornLocation,
          affiliations: data.affiliations,
        })
        console.log(data)
      })
    
  }
  
  render() {
    const affilies = this.state.affiliations.map((data, i) => {
      return <AffItemRow key={i} data={data}/>
     })

    return (
      <div className='main'>
        {
          this.state.loadedCharacter && 
            <div className='container'>
              <img src={this.state.image}></img>
              <div className='column'>
                <h1>{this.state.name}</h1>
                <p><strong>Height(m):</strong> {this.state.height}</p>
                <p><strong>Homeworld:</strong> {this.state.bornLocation}</p>
                <p><strong>Affiliations:</strong></p>
                <ul>
                  {affilies}
                </ul>
              </div>
            </div>
        }
        <button type='button' onClick={() => this.getNewCharacter()} className="btn">Randomize Character</button>
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StarWars />
      </header>
    </div>
  );
}

export default App; //Exports the file so it can be imported into other files ie: index.js
