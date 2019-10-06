import React, { Component } from "react";
import styles from "./FormView.module.css";
import validation from "./form-validation";
import FormItem from "../FormItem";
import Button from "../Button";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: "",
			errors: {
				username: false,
				password: false,
				email: false
			}
		};
		this.validationMessages = {
			emptyUsername: "Enter your login.",
			noEmail: "Enter your email.",
			noPassword: "Enter password."
		};
	}
	handleInputChange = e => {
		const target = e.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const checkValidation = validation(this.state);
		if (checkValidation.correctForm) {
			this.setState({
				username: "",
				email: "",
				password: "",
				errors: {
					username: false,
					email: false,
					password: false
				}
			});
		} else {
			this.setState({
				errors: {
					username: checkValidation.username,
					email: checkValidation.email,
					password: checkValidation.password
				}
			});
		}
	};
	render() {
		return (
			<div className={styles.formView}>
				<h2 className={styles.formView__title}>{this.props.formType}</h2>
				<form
					onSubmit={this.handleSubmit}
					className={[styles.formView__form, styles.form].join(" ")}
					noValidate
				>
					<FormItem
						text="Username"
						id="username"
						name="username"
						type="text"
						value={this.state.username}
						handleInputChange={this.handleInputChange}
					/>
					{this.state.errors.username && (
						<span className={styles.form__validateInfo}>
							{this.validationMessages.emptyUsername}
						</span>
					)}
					{this.props.isRegister ? (
						<FormItem
							text="E-mail"
							id="email"
							name="email"
							type="email"
							value={this.state.email}
							handleInputChange={this.handleInputChange}
						/>
					) : null}
					{this.state.errors.email && this.props.isRegister && (
						<span className={styles.form__validateInfo}>{this.validationMessages.noEmail}</span>
					)}
					<FormItem
						text="Password"
						id="password"
						name="password"
						type="password"
						value={this.state.password}
						handleInputChange={this.handleInputChange}
					/>
					{this.state.errors.password && (
						<span className={styles.form__validateInfo}>{this.validationMessages.noPassword}</span>
					)}
					<Button text={this.props.btnText} />
				</form>
			</div>
		);
	}
}
export default Form;
