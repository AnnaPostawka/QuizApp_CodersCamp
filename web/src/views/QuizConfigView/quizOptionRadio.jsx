import React, { Component } from "react";
import { Radio } from "antd";

export default class QuizOptionRadio extends Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.selected}
    }

    onChange(e) {
        this.setState({value: e.target.value});
        this.props.onOptionChange(this.props.optionKey, e.target.value);
    }

	render() {
        return (
            <Radio.Group value={this.state.value} onChange={this.onChange.bind(this)}>
                {this.props.options.map(
                    (option) => {
                        return (
                            <Radio value={option.val}>{option.desc}</Radio>
                        );
                    }
                )}
            </Radio.Group>
        );
	}
}