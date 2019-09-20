import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import './style.css';


class SearchOptions extends Component {
  constructor() {
    super();
    this.state = {
      checkboxValue: '',
    };
    this.checkboxChange = this.checkboxChange.bind(this);
  }

  checkboxChange(event) {
    if (event.target.checked) {
      this.setState({ checkboxValue: event.target.value });
    } else {
      this.setState({ checkboxValue: '' });
    }
  }

  render() {
    const data = this.state.result;
    const Title = styled.h1`
  font-size: 1.0em;
  text-align: left;
  color:White;
`;
    const Wrapper = styled.section`
  padding: 1.5 em;
  background: #490975;
`;

    return (
      <div>
        <div className="first">
          <Wrapper>
            <Title>
              Hierarchy Comparison Direction
          </Title>
          </Wrapper>
          <header className="all-header">
            <input type="radio" name="fruit" value="Compare Down Hierarchy" onChange={this.checkboxChange} /> Compare Down Hierarchy
                <input type="radio" name="fruit" value="Compare Across Hierarchy" onChange={this.checkboxChange} />Compare Across Hierarchy
                </header>
        </div>
        <h5>User have Selected {this.state.checkboxValue}</h5>
      </div>
    )


  }
}

export default SearchOptions;