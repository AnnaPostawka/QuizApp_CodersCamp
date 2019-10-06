import React from "react";
import styles from "./TopBar.module.css";

const TopBar = ({ title, description }) => {
	return (
		<div className={styles.topBar}>
			<h1 className={[styles.topBar__title, styles.topBar__item].join(' ')}>{title}</h1>
			<p className={[styles.topBar__description, styles.topBar__item].join(' ')}>{description}</p>
			<p className={styles.topBar__text}>

				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
				labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
				laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
				vol
			</p>
		</div>
	);
};

export default TopBar;
