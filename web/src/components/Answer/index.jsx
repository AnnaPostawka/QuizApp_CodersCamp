import React from "react";
import { Button } from "antd";
import entityToChar from "../../utils/entityToChar";
import "./style.css";

export default class Answer extends React.Component {
	render() {
		return (
			<Button block={true} className="question__answer">
                {entityToChar(this.props.children)}
			</Button>
		);
	}
}
