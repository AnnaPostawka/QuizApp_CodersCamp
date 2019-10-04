import React from "react";
import { Button } from "antd";
import AnswersList from "../AnswersList";
import QuestionHeader from "../QuestionHeader";
import { connect } from "react-redux";
import { incrementQuestionIndex } from "../../redux/actions/incrementQuestionIndex";
import { setAnswerFinished } from "../../redux/actions/setAnswerFinished";
import { setQuestion } from "../../redux/actions/setQuestion";
import styles from "./Question.module.css";

class Question extends React.Component {
	onClick = () => {
		this.props.answer.finished ? this.changeQuestion() : this.showCorrectAnswer();
	};

    changeQuestion() {
        this.props.setAnswerFinished(false);
        this.props.incrementQuestionIndex();
	}

	showCorrectAnswer() {
		this.props.setAnswerFinished(true);
	}

	generateButtonText() {
		return this.props.answer.finished ? "Next question" : "Check answer";
	}

	render() {
		return (
			<div className={styles.question}>
				<QuestionHeader />
				<AnswersList />
				<Button
					block={true}
					type="primary"
					className={styles.question__button}
					onClick={this.onClick}
				>
					{this.generateButtonText()}
				</Button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		answer: state.answer,
		questionList: state.questionList,
		question: state.question
	};
};

export default connect(
	mapStateToProps,
	{
		setAnswerFinished,
		setQuestion,
		incrementQuestionIndex
	}
)(Question);
