import React, { Component } from 'react';
import axios from 'axios';
import CheckBoxList from './CheckBoxList';
import { render } from 'react-dom';
import styled from 'styled-components';

class RegionCountry extends Component {

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
        console.log("Outer...", result);

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
    console.log("print", data);

    const Button = styled.button`
   background: : "white";
   color: "#f05e0a";
   font-size: 1em;
   button-align:"right";
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid palevioletred;
    border-radius: 3px;
`;

    return (
      <div>
        <h4 align="left"> Region/Country</h4>
        <div>
          <h4>
            <label>
              <input type="checkbox" color="#490975" value="All" />
              All
                </label>
          </h4>

          <h4>
            <label>
              <input type="checkbox" value="Misc" />
              Misc
                </label>
          </h4>

          <input className="textBox" type="text" placeholder=" Quick Search" />

        </div>
        <CheckBoxList region={data} />
        <div>
          <Button>Search</Button>
        </div>



      </div>
    )
  }

}

export default RegionCountry;