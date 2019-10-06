import React from "react";
import styles from "./Footer.module.css";
import { NavLink } from "react-router-dom";

const Footer = ({ linkText, linkPath, text }) => {
	return (
		<div className={styles.footer}>
			{text}
			<NavLink className={styles.footer__link} to={linkPath}>
				{linkText}
			</NavLink>
		</div>
	);
};
export default Footer;
