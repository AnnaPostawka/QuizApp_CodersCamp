import React from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../../redux/actions/fetchQuiz";
import { setQuestion } from "../../redux/actions/setQuestion";
import Question from "../../components/Question";
import { Spin, Skeleton, PageHeader, Divider } from "antd";
import Timer from "react-compound-timer";
import styles from "./QuizView.module.css";

class QuizView extends React.Component {
	componentDidMount() {
		this.props.fetchQuiz("https://opentdb.com/api.php?amount=10");
	}

	setupFirstQuestion() {
		this.props.setQuestion(this.props.questionsList[0]);
	}

	generateContentOrLoader() {
		if (this.props.questionsList.length > 0) {
			if (!this.props.question.current) this.setupFirstQuestion();
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

	generateContent() {
		return (
			<>
                <div className={styles.content__timer}>
					<Timer formatValue={val => (val < 10 ? `0${val}` : val)}>
						<Timer.Hours />:<Timer.Minutes />:<Timer.Seconds />
					</Timer>
				</div>
                <Divider className={styles.content__divider} />
				<Question question={this.props.questionsList[0]} />
			</>
		);
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
		questionsList: state.questionsList,
		question: state.question
	};
};

export default connect(
	mapStateToProps,
	{
		fetchQuiz,
		setQuestion
	}
)(QuizView);
