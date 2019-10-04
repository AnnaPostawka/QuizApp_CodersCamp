import React from "react";
import Answer from "../Answer";
import { connect } from "react-redux";
import { setAnswerIndex } from "../../redux/actions/setAnswerIndex";
import styles from "./AnswersList.module.css";

class AnswersList extends React.Component {
	generateShuffledAnswers() {
		const question = this.props.questionsList[this.props.question];
		const answersList = [question.correct_answer, ...question.incorrect_answers];

		this.shuffleArray(answersList);
		this.setIndex(answersList, question);

		return answersList.map((answer, index) => (
			<Answer key={index} index={index}>
				{answer}
			</Answer>
		));
	}

	shuffleArray(arr) {
		for (let i = arr.length - 1; i > 0; --i) {
			const j = Math.floor(Math.random() * (i + 1));
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}

	setIndex(answersList, question) {
		let correctIndex = -1;

		for (let i = 0; i < answersList.length; ++i) {
			if (answersList[i] === question.correct_answer) {
				correctIndex = i;
			}
		}

		if (correctIndex !== -1) this.props.setAnswerIndex(correctIndex);
	}

	render() {
		return <div className={styles.question__answers}>{this.generateShuffledAnswers()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		questionsList: state.questionsList,
		question: state.question
	};
};

export default connect(
	mapStateToProps,
	{ setAnswerIndex }
)(AnswersList);
