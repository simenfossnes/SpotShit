import React, { Component } from 'react';
import SpotList from '../containers/SpotList';
import './App.css';
import {postSpot, fetchSpots} from '../actions/spotActions';

class App extends Component {

    onFormSubmit = (e) => {
        e.preventDefault();
        alert('this is it!');
        postSpot();
    };

    componentWillMount() {
        fetchSpots();
    }

    render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SpotShit</h1>
        </header>
          <div>
              <form onSubmit={this.onFormSubmit}>
                  <input type="file" accept="image/*" capture="camera" onChange={(event) => console.log(event.target.value)}/>
                  <button type="submit">Upload</button>
              </form>
          </div>
          <div>
              <p className="App-intro">
                  ...
              </p>
              <SpotList/>
          </div>
      </div>
    );
  }
}

export default App;
