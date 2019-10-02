import React, { Component } from "react";
import { Select } from "antd";

export default class QuizOptionSelect extends Component {
    constructor(props) {
        super(props);
    }

	render() {
        return (
            <Select defaultValue={this.props.selected}>
                {this.props.options.map(
                    (option) => {
                        return (
                            <Select.Option value={option.val}>{option.desc}</Select.Option>
                        );
                    }
                )}
            </Select>
            );
	}
}