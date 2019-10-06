import React from "react";
import { Button } from "antd";
import entityToChar from "../../utils/entityToChar";
import { connect } from "react-redux";
import { setAnswerFinished } from "../../redux/actions/setAnswerFinished";
import { incrementPoints } from "../../redux/actions/incrementPoints";
import styles from "./Answer.module.css";

const defaultState = { class: styles.question__answer, clicked: false };

class Answer extends React.Component {
	state = defaultState;

	static getDerivedStateFromProps(props, state) {
		if (props.answer.finished) {
			if (props.index === props.answer.index)
				return {
					class: styles["question__answer--correct"]
				};
			return null;
		} else {
			if (state.clicked)
				return {
					class: styles["question__answer--wrong"],
					clicked: false
				};
			return defaultState;
		}
	}

	onClick = () => {
		if (!this.props.answer.finished) {
			this.props.setAnswerFinished(true);
			this.setState({ clicked: true });

			if (this.props.index === this.props.answer.index) this.props.incrementPoints();
		}
	};

	render() {
		return (
			<Button block={true} className={this.state.class} onClick={this.onClick}>
				{entityToChar(this.props.children)}
			</Button>
		);
	}
}

const mapStateToProps = state => {
	return {
		answer: state.answer
	};
};

export default connect(
	mapStateToProps,
	{
		setAnswerFinished,
		incrementPoints
	}
)(Answer);
