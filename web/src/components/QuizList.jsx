import React from "react";
import BooleanQuestion from "./BooleanQuestion";
import MultipleQuestion from "./MultipleQuestion";

export default class QuizList extends React.Component {
	generateQuestion(question) {
		return question.type === "boolean" ? (
			<BooleanQuestion question={question} />
		) : (
			<MultipleQuestion question={question} />
		);
	}

	render() {
		return (
			<div className="foo">
				{this.props.questionsList.map(question => this.generateQuestion(question))}
			</div>
		);
	}
}
