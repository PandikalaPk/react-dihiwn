import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';


class SearchOptions extends Component {
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
    
    return (
    <div>
      <h2 align ="left"> Search Options</h2> 
        <div className="first">
                <header className="inside-header">
                <h4 align ="left"> Hierarchy Comparison Direction</h4> 
                </header>
                <header className="first-header">
                <input type="radio" name="fruit" value="Compare Down Hierarchy"  onChange={this.checkboxChange}/> Compare Down Hierarchy
                <input type="radio" name="fruit" value="Compare Across Hierarchy"  onChange={this.checkboxChange} />Compare Across Hierarchy
                </header>
        </div>
        <h5>User have Selected {this.state.checkboxValue}</h5>
      </div>
    )


  }
}

export default SearchOptions;