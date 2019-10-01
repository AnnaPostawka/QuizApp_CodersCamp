import React from "react";
import { Button } from "antd";

export default class Answer extends React.Component {
	render() {
		return (
			<Button onClick={this.props.onQuestionClick} block={true}>
                {this.props.children}
			</Button>
		);
	}
}
