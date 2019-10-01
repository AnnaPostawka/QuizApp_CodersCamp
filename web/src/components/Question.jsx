import React from "react";
import { Button } from "antd";
import AnswersList from "./AnswersList";
import QuestionHeader from "./QuestionHeader";

export default class Question extends React.Component {
	checkAnswer = () => {};

	render() {
		return (
			<>
				<QuestionHeader>{this.props.question.question}</QuestionHeader>
				<AnswersList question={this.props.question} />
				<Button block={true} type="primary">
					Check answer
				</Button>
			</>
		);
	}
}
