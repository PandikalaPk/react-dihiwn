import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import SearchOptions from './SearchOptions';
import ExcludedStatus from './ExcludedStatus';
import RegionCountry from './RegionCountry';
import styled from 'styled-components';
import { StyleSheet, Text, View } from 'react-native';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };
  }

  render() {
    const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color:White;
`;

    const Client = styled.h1`
  font-size: 1.0em;
  text-align: left;
  color:#030303;
`;

    const Wrapper = styled.section`
  padding: 1.5 em;
  background: #490975;
`;
    const WrapperC = styled.section`
  padding: 1.5 em;
  background: #ededed;
`;
    return (
      <div>
        <Wrapper>
          <Title>
            FedEx Services
            Customer Pricing Map
          </Title>
        </Wrapper>
        <WrapperC>
          <Client>
            Search Options
          </Client>
        </WrapperC>

        <SearchOptions />
        <ExcludedStatus />
        
        <RegionCountry />

        <p>
          Entering...
        </p>



      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
