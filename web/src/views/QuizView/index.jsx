import React from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../../redux/actions/fetchQuiz";
import { Title } from "antd/lib/typography/Title";
import Question from "../../components/Question";

class QuizView extends React.Component {
	componentDidMount() {
		this.props.fetchQuiz("https://opentdb.com/api.php?amount=10");
	}

	generateAnswersOrLoader() {
		if (this.props.questionsList.length > 0) return this.generateAnswers();
		else return this.generateLoader();
	}

	generateLoader() {
		return <div>This will be a loader in the future</div>;
	}

	generateAnswers() {
		return (
			<div>
				{/* <Title level={2}>Some title</Title> */}
				<Question question={this.props.questionsList[0]} />
			</div>
		);
	}

	render() {
		return this.generateAnswersOrLoader();
	}
}

const mapStateToProps = state => {
	return {
		questionsList: state.questionsList,
		currentQuestionIndex: state.currentQuestionIndex
	};
};

export default connect(
	mapStateToProps,
	{ fetchQuiz }
)(QuizView);
