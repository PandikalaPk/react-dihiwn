import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
class CheckBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false
    };
  }

  toggleCheckboxChange = (e) => {
    console.log(e)
    this.setState({ isChecked: !this.state.isChecked });
  }
  render() {
    const { label } = this.props;
    const { isChecked } = this.state;

    return (
      <div className="row" >
             const country = {this.props.countries};
             console.log("",country);
          
               return (
                      <div>
                        <header className="country-header">
                          <label>
                            <input type="checkbox"
                              value={country.country_name}
                              checked={isChecked}
                              onChange={this.toggleCheckboxChange}
                            />
                            {country.country_name}
                          </label>
                        </header>
                      </div>)
                  })}
                </div>
                         
          )
        }
      }

export default CheckBox;

const Title = styled.h1`
  font-size: 1.0em;
  text-align: left;
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
