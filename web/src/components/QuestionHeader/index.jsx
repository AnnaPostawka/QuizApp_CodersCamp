import React from "react";
import entityToChar from "../../utils/entityToChar";
import "./style.css";

export default class QuestionHeader extends React.Component {
	checkAnswer = () => {};

	render() {
		return (
			<div className="question__header">
				<div className="question__counter">Question counter</div>
				<div className="question__text">{entityToChar(this.props.children)}</div>
			</div>
		);
	}
}
