import React from "react";
import styles from "./Wrapper.module.css";
import TopBar from "../TopBar";
import Form from "../Form";
import Footer from "../Footer";

const Views = {
	Login: {
		title: "Testownik",
		description: "description",
		formType: "Sign In",
		btnText: "Sign In",
		footerText: "Don't have an account yet?",
		linkText: "Sign Up",
		linkPath: "/register",
		isRegister: false
	},
	Register: {
		title: "Testownik",
		description: "description",
		formType: "Sign Up",
		btnText: "Create Account",
		footerText: " Do you have an account?",
		linkText: "Sign In",
		linkPath: "/",
		isRegister: true
	}
};

const Wrapper = ({ view }) => {
	const {
		title,
		description,
		formType,
		btnText,
		footerText,
		linkText,
		linkPath,
		isRegister
	} = Views[view];
	return (
		<div className={styles.wrapper}>
			<TopBar title={title} description={description} />
			<div className={styles.wrapper__container}>
				<Form btnText={btnText} formType={formType} isRegister={isRegister} />
				<Footer text={footerText} linkText={linkText} linkPath={linkPath} />
			</div>
		</div>
	);
};
export default Wrapper;
