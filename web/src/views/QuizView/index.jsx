import React from "react";
import { connect } from "react-redux";
import { fetchQuiz } from "../../redux/actions/fetchQuiz";
import Question from "../../components/Question";
import { Spin, Skeleton } from "antd";

class QuizView extends React.Component {
	componentDidMount() {
		this.props.fetchQuiz("https://opentdb.com/api.php?amount=10");
	}

	generateQuestionOrLoader() {
		if (this.props.questionsList.length > 0) return this.generateQuestion();
		else return this.generateLoader();
	}

	generateLoader() {
        return <Spin tip="Loading..." size="large">
            <Skeleton active />
        </Spin>;
	}

	generateQuestion() {
		return (
			<div>
				<Question question={this.props.questionsList[0]} />
			</div>
		);
	}

	render() {
		return <div>{this.generateQuestionOrLoader()}</div>;
	}
}

const mapStateToProps = state => {
	return {
		questionsList: state.questionsList
	};
};

export default connect(
	mapStateToProps,
	{ fetchQuiz }
)(QuizView);
