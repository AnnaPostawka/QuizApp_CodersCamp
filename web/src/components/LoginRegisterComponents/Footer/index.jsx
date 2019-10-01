import React from "react";
import "./Footer.css";
import { NavLink } from 'react-router-dom';

const Footer = ({ linkText, linkPath, text }) => {
	return (
		<div className="footer">
			{text}
			<NavLink className="footer__link" to={linkPath}>{linkText}</NavLink>
		</div>
	);
};
export default Footer;
