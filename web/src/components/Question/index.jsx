import React from "react";
import { Button } from "antd";
import AnswersList from "../AnswersList";
import QuestionHeader from "../QuestionHeader";
import { connect } from "react-redux";
import styles from "./Question.module.css";

class Question extends React.Component {
	onClick = () => {
		// TODO:: implement
	};

	generateButtonText() {
		return "lalalala";
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
		answer: state.answer
	};
};

export default connect(mapStateToProps)(Question);
