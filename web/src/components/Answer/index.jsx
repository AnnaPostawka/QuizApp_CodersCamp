import React from "react";
import { Button } from "antd";
import entityToChar from "../../utils/entityToChar";

export default class Answer extends React.Component {
	render() {
		return (
			<Button block={true}>
                {entityToChar(this.props.children)}
			</Button>
		);
	}
}
