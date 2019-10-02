import React, { Component } from "react";

export default class QuizOptionWrapper extends Component {
    constructor(props) {
        super(props);
    }

	render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <div>{this.props.children}</div>
            </div>
            );
	}
}