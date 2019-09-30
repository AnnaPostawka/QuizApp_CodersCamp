import React from "react";
import Question from "./Question";

export default class QuizList extends React.Component {
	render() {
		return (
			// <div className="foo">
			this.props.questionsList.map(question => <Question question={question} />)
			// </div>
		);
	}
}
