import React, { Component, PropTypes } from 'react';

class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,


    };
  }

    toggleCheckboxChange = () => {
      const { handleCheckboxChange, label } = this.props;

      this.setState(({ isChecked }) => (
        {
          isChecked: !isChecked,
        }
      ));

      handleCheckboxChange(label);
    }


    render() {
      const { label } = this.props;
      const { isChecked } = this.state;

      return (
        <div className="row" >
          {this.props.region &&
            this.props.region.regions.map(regionC => {
              console.log("Inside Chb..",regionC);

            return (
              <div className="column">
                <div className="card">

                  <header className="inside-header">
                    <h4>
                      <label>
                        <input type="checkbox"
                          value={regionC.region_name}
                          checked={isChecked}
                          onChange={this.toggleCheckboxChange}
                        />
                        {regionC.region_name}
                      </label>
                    </h4>
                  </header>

                  {regionC.countries.map(country => {
                    return (
                      <div>
                        <label>
                          <input type="checkbox"
                            value={country.country_name}
                            checked={isChecked}
                            onChange={this.toggleCheckboxChange}
                          />
                          {country.country_name}
                        </label>
                      </div>)
                  })}
                </div>
              </div>
            )
          })
          }
        </div>


      );
    }
  }

  export default Checkbox;
