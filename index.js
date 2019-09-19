import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import SearchOptions from './SearchOptions';
import ExcludedStatus from './ExcludedStatus';
import RegionCountry from './RegionCountry';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <SearchOptions />
        <ExcludedStatus />
        //<RegionCountry />

        <p>
         Doing...
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
