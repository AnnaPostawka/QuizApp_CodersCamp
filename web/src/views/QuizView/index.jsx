import React from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../../redux/actions/fetchQuiz";
import { cleanQuestions } from "../../redux/actions/cleanQuestions.js";
import Question from "../../components/Question";
import { Spin, Skeleton, PageHeader, Divider } from "antd";
import Timer from "react-compound-timer";
import styles from "./QuizView.module.css";

class QuizView extends React.Component {
	constructor(props) {
		super(props);
		this.props.fetchQuiz(this.props.quizConfigUrl);
	}

	generateContentOrLoader() {
		if (this.props.questionsList.length > 0) {
			return this.generateContent();
		} else {
			return this.generateLoader();
		}
	}

	generateLoader() {
		return (
			<div className={styles.spinner}>
				<Spin tip="Loading..." size="large">
					<Skeleton active />
				</Spin>
			</div>
		);
	}

	generateQuestionOrFinisher() {
		return this.props.questionsList[this.props.question] === undefined ? (
			`You've just finished the quiz with ${this.props.points} points!`
		) : (
			<Question question={this.props.questionsList[this.props.question]} />
		);
	}

	generateContent() {
		return (
			<>
				<div className={styles.content__timer}>
					<Timer formatValue={val => (val < 10 ? `0${val}` : val)}>
						<Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
					</Timer>
				</div>
				<Divider className={styles.content__divider} />
				{this.generateQuestionOrFinisher()}
			</>
		);
	}

	componentWillUnmount() {
		this.props.cleanQuestions();
	}

	render() {
		return (
			<div className={styles.layout}>
				<PageHeader title="Back" className={styles.back} onBack />
				<div id="content" className={styles.content}>
					{this.generateContentOrLoader()}
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		theState: state,
		quizConfigUrl: state.quizConfig.configUrl,
		questionsList: state.questionsList,
		question: state.question,
		points: state.points
	};
};

export default connect(
	mapStateToProps,
	{
		fetchQuiz,
		cleanQuestions
	}
)(QuizView);
