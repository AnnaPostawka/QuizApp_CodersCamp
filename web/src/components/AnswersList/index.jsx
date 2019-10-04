import React from "react";
import Answer from "../Answer";
import { connect } from "react-redux";
import { setAnswerIndex } from "../../redux/actions/setAnswerIndex";
import styles from "./AnswersList.module.css";

class AnswersList extends React.Component {
	generateShuffledAnswers() {
		const answersList = [
			this.props.question.current.correct_answer,
			...this.props.question.current.incorrect_answers
		];

		this.shuffleArray(answersList);
		this.setIndex(answersList);

		return answersList.map((answer, index) => <Answer key={index}>{answer}</Answer>);
	}

	shuffleArray(arr) {
		for (let i = arr.length - 1; i > 0; --i) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}

	setIndex(answersList) {
		const correct_answer = this.props.question.current.correct_answer;
		let correctIndex;

		for (let index in answersList) if (answersList[index] === correct_answer) correctIndex = index;

		if (correctIndex) this.props.setAnswerIndex(correctIndex);
	}

	render() {
		return <div className={styles.question__answers}>{this.generateShuffledAnswers()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		question: state.question
	};
};

export default connect(
	mapStateToProps,
	{ setAnswerIndex }
)(AnswersList);
