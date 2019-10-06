import React, { Component } from "react";
import { Button, Icon } from "antd";
import "./navigationButton.css";

export default class NavigationButton extends Component {
	onClick() {
		this.props.onClick(this.props.link);
	}

	render() {
		return (
			<div className="navbutton-wrapper">
				<Button type="link" onClick={this.props.onClick}>
					{this.props.direction === "back" ? <Icon type="arrow-left" /> : ""}
					{this.props.children}
					{this.props.direction === "forward" ? <Icon type="arrow-right" /> : ""}
				</Button>
			</div>
		);
	}
}
