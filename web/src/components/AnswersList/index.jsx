import React from "react";
import Answer from "../Answer";
import "./style.css";

export default class AnswersList extends React.Component {
	generateShuffledAnswers() {
		const answersList = [<Answer correct="true">{this.props.question.correct_answer}</Answer>];

		answersList.push(
			...this.props.question.incorrect_answers.map(answer => (
				<Answer correct="false">{answer}</Answer>
			))
		);

		this.shuffleArray(answersList);

		return answersList;
	}

	shuffleArray(arr) {
		for (let i = arr.length - 1; i > 0; --i) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}

	render() {
		return <div className="question__answers">{this.generateShuffledAnswers()}</div>;
	}
}
