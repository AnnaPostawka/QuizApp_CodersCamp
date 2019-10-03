import React, { Component } from "react";

export default class QuizOptionWrapper extends Component {

	render() {
        return (
            <div>
                {this.props.title ? (<h3>{this.props.title}</h3>) : ("")}
                <div>{this.props.children}</div>
            </div>
            );
	}
}