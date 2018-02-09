import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SpotShit</h1>
        </header>
          <div>

              <input type="file" accept="image/*" capture="camera" onChange={(event) => console.log(event.target.value)}/>
          </div>
          <div>
              <p className="App-intro">
                  ...
              </p>
          </div>
      </div>
    );
  }
}

export default App;
