import React, { Component } from 'react';
import { render } from 'react-dom';
import styled from 'styled-components';
import './style.css';


class ExcludedStatus extends Component {
  constructor() {
    super();
    this.state = {
      checkboxValue:'',
    };
   this.checkboxChange = this.checkboxChange.bind(this);
  }

  checkboxChange(event){
  if(event.target.checked){
    this.setState({checkboxValue:event.target.value});
  }else{
    this.setState({checkboxValue:''});
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
    <div className="first">
    
          <Wrapper>
          <Title>
             Excluded Status
             </Title>
          </Wrapper>
           <header className="all-header">
                <h5>
                <label>
                  <input type="checkbox" value="Cash"/>
                  Cash
                </label>
                </h5>
                <h5>
                <label>
                  <input type="checkbox" value="Delete"/>
                  Delete
                </label>
                </h5>
         </header>
      </div>
  )


  }
}

export default ExcludedStatus;