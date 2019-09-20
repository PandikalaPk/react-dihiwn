import React, { Component, PropTypes } from 'react';
import styled from 'styled-components';
import CheckBox from './CheckBox';
class CheckBoxList extends Component {

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
        {this.props.region &&
          this.props.region.regions.map(regionC => {
            return (
              <div className="column">
                <div className="card">

                  <header className="region-header">
                    <Wrapper>
                      <Title>
                        <label>
                          <input type="checkbox"
                            value={regionC.region_name}
                            checked={isChecked}
                            onChange={(e) => this.toggleCheckboxChange(e)}
                          />
                          {regionC.region_name}
                        </label>
                      </Title>
                    </Wrapper>
                  </header>
                </div>
                <CheckBox countrydata={cdata} />
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default CheckBoxList;

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
