import React from "react";
import "./TopBar.css";

class TopBar extends React.Component {
	render() {
		return (
			<div className="topBar">
				<h1 className="topBar__title topBar__item">{this.props.title}</h1>
				<p className="topBar__description topBar__item">{this.props.description}</p>
			</div>
		);
	}
}

export default TopBar;
