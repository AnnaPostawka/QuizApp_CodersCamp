import React from "react";
import QuizList from "./QuizList";
import { connect } from "react-redux";
import { fetchQuiz } from "../redux/actions/quiz";

class Quiz extends React.Component {
	componentDidMount() {
		this.props.fetchQuiz();
	}

	render() {
		return <QuizList questionsList={this.props.questionsList} />;
	}
}

const mapStateToProps = state => {
	return { questionsList: state.questionsList }
};

export default connect(
	mapStateToProps,
	{ fetchQuiz }
)(Quiz);
