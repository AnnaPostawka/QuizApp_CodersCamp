import React from "react";
import "./TopBar.css";

const TopBar = ({ title, description }) => {
	return (
		<div className="topBar">
			<h1 className="topBar__title topBar__item">{title}</h1>
			<p className="topBar__description topBar__item">{description}</p>
			<p className="topBar__text">
				{" "}
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				vol
			</p>
		</div>
	);
};

export default TopBar;
