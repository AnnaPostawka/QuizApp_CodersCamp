import React, { Component, useEffect } from "react";
import styles from "./FormView.module.css";
import validation from "./form-validation";
import FormItem from "../FormItem";
import Button from "../Button";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/login";
import { register } from "../../../redux/actions/register";

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
		const { isRegister } = this.props;
		const { username, email, password } = this.state;
		const checkValidation = validation({
			email,
			password,
			username: isRegister ? useEffect : "sa"
		});
		if (!checkValidation.correctForm) {
			this.setState({
				errors: {
					username: checkValidation.username,
					email: checkValidation.email,
					password: checkValidation.password
				}
			});
		} else {
			if (!this.props.isRegister) {
				this.props.login(email, password);
			} else {
				this.props.register(username, email, password);
			}
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
					{this.props.isRegister ? (
						<FormItem
							text="Username"
							id="username"
							name="username"
							type="text"
							value={this.state.username}
							handleInputChange={this.handleInputChange}
						/>
					) : null}
					{this.state.errors.username && (
						<span className={styles.form__validateInfo}>
							{this.validationMessages.emptyUsername}
						</span>
					)}

					<FormItem
						text="E-mail"
						id="email"
						name="email"
						type="email"
						value={this.state.email}
						handleInputChange={this.handleInputChange}
					/>

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
export default connect(
	null,
	{ login, register }
)(Form);
