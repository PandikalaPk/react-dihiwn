import React, { Component } from 'react';
import { render } from 'react-dom';
import CheckBox from './CheckBox';
import CheckBoxList from './CheckBoxList';


export default class RegCountry extends React.Component {
                constructor(props) {
                    super(props);

                    this.state = {
                        isAllSelected: false,
                        checkList: [
                            {
                                name: "opco",
                                value: "bangalore",
                                checked: false,
                            },
                            {
                                name: "opco",
                                value: "chennai",
                                checked: false,
                            },
                            {
                                name: "opco",
                                value: "delhi",
                                checked: false,
                            }
                        ]
                    };
                }

                onCheckBoxChange(checkName, isChecked) {
                    let isAllChecked = (checkName === 'all' && isChecked);
                    let isAllUnChecked = (checkName === 'all' && !isChecked);
                    const checked = isChecked;

                    const checkList = this.state.checkList.map((opco, index) => {
                        if(isAllChecked || opco.value === checkName) {
                            return Object.assign({}, opco, {
                                checked,
                            });
                        } else if (isAllUnChecked) {
                            return Object.assign({}, opco, {
                                checked: false,
                            });
                        }

                        return opco;
                    });

                    let isAllSelected = (checkList.findIndex((item) => item.checked === false) === -1) || isAllChecked;

                    this.setState({
                        checkList,
                        isAllSelected,
                    });

                }

                render() {
                    return (<CheckBoxList options={this.state.checkList} isCheckedAll={this.state.isAllSelected} onCheck={this.onCheckBoxChange.bind(this)} />);
                }
            }
