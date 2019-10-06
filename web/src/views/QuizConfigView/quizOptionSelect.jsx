import React, { Component } from "react";
import { Select } from "antd";

export default class QuizOptionSelect extends Component {
	onChange(value) {
		this.props.onOptionChange(this.props.optionKey, value);
	}

	render() {
		return (
			<Select defaultValue={this.props.selected} onChange={this.onChange.bind(this)}>
				{this.props.options.map(option => {
					return <Select.Option value={option.val}>{option.desc}</Select.Option>;
				})}
			</Select>
		);
	}
}
