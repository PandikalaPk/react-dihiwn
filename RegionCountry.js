import React, { Component } from 'react';
import axios from 'axios';
import Checkbox from './Checkbox';
import { render } from 'react-dom';

class RegionCountry extends Component{

  constructor() {
    super();
    this.state = {
      
    };
  
  }

  async componentDidMount() {
  await axios.get('https://cpmtest.app.wtcdev2.paas.fedex.com/cpm/R3/search-options-service/regionCountry')
  .then(response => {
    const result = response.data;
    this.setState({ result });
    console.log("Outer...",result);
    
  })
  .catch(error => {
    console.log(error);
  });
}

componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  }
 createCheckbox = label => (
    <Checkbox
            label={label}
            handleCheckboxChange={this.toggleCheckbox}
            key={label}
        />
  )

  createCheckboxes = () => (
    result.map(this.createCheckbox)
  )
render() {
   const data = this.state.result;
   
   console.log("print",data);
   
    return (
      <div>
      <h2 align ="left"> Region/Country</h2>  
        <div> 
             <h4>
                <label>
                  <input type="checkbox" value="All"/>
                  All
                </label>
              </h4>
          
              <h4>
                <label>
                  <input type="checkbox" value="Misc"/>
                  Misc
                </label>
              </h4>
            
        <input className="textBox" type="text" placeholder=" Quick Search" /> 
        
        </div>
      <Checkbox region={data} />
      
        
      
      </div>
    )
 }
  
}

export default RegionCountry;