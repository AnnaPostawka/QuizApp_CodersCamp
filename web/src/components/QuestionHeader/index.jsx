import React from "react";
import entityToChar from "../../utils/entityToChar";
import { connect } from "react-redux";
import "./style.css";

class QuestionHeader extends React.Component {
	checkAnswer = () => {};

	render() {
		return (
			<div className="question__header">
				<div className="question__counter">
					Question {this.props.question.index} / {this.props.questionsList.length}
				</div>
				<div>{entityToChar(this.props.question.current.question)}</div>
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

export default connect(mapStateToProps)(QuestionHeader);
