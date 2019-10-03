import React, { Component } from "react";
import { InputNumber } from "antd";

export default class QuizOptionNumberPicker extends Component {

    onChange(value) {
        this.props.onOptionChange(this.props.optionKey, value);
    }

    render() {
        return (
            <InputNumber 
                min={this.props.min}
                max={this.props.max}
                defaultValue={this.props.default}
                onChange={this.onChange.bind(this)}
            />
        );
    }
}