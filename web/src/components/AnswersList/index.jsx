import React from "react";
import Answer from "../Answer";
import { connect } from "react-redux";
import styles from "./AnswersList.module.css";

class AnswersList extends React.Component {
	generateShuffledAnswers() {
		const answersList = [<Answer>{this.props.question.current.correct_answer}</Answer>];

		answersList.push(
			...this.props.question.current.incorrect_answers.map(answer => (
				<Answer>{answer}</Answer>
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
        return <div className={styles.question__answers}>{this.generateShuffledAnswers()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		question: state.question
	};
};

export default connect(mapStateToProps)(AnswersList);
