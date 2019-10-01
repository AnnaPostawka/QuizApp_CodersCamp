import React from "react";
import entityToChar from "../utils/entityToChar";

export default class QuestionHeader extends React.Component {
	checkAnswer = () => {};

	render() {
		return (
			<div>
				<div>Question counter</div>
				<div>{entityToChar(this.props.children)}</div>
			</div>
		);
	}
}
