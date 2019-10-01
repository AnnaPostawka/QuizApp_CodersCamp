import React from "react";
import { Button } from "antd";
import AnswersList from "./AnswersList";

export default class Question extends React.Component {
	checkAnswer = () => {};

	render() {
		return (
			<div>
				<AnswersList question={this.props.question} />
				<Button block={true} type="primary">
					Check answer
				</Button>
			</div>
		);
	}
}
