import React from "react";
import entityToChar from "../../utils/entityToChar";
import { connect } from "react-redux";
import styles from "./QuestionHeader.module.css";

class QuestionHeader extends React.Component {
	render() {
		return (
			<div className={styles.question__header}>
				<div className={styles.question__counter}>
					Question {this.props.question + 1} / {this.props.questionsList.length}
				</div>
				<div className={styles.question__points}>Points: {this.props.points}</div>
				<div>{entityToChar(this.props.questionsList[this.props.question].question)}</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		questionsList: state.questionsList,
		question: state.question,
		points: state.points
	};
};

export default connect(mapStateToProps)(QuestionHeader);
