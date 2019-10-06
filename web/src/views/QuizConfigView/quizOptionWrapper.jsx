import React, { Component } from "react";

export default class QuizOptionWrapper extends Component {

	render() {
        return (
            <div className="option-wrapper">
                {this.props.title ? (<h3 className="option-title">{this.props.title}</h3>) : ("")}
                <div>{this.props.children}</div>
            </div>
            );
	}
}