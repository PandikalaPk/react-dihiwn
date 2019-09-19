import React, { Component } from 'react';
import { render } from 'react-dom';
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
    
    return (
    <div className="first">
          <header className="inside-header">
            <h4 align ="left"> Excluded Status</h4> 
          </header>
           <header className="first-header">
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