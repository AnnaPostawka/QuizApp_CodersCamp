import React, { Component } from "react";
import { Button } from "antd";
import "./FormView.css";
import FormItem from "../FormItem";

class Form extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			email: ""
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
	render() {
		return (
			<div className="formView">
				<h2 className="formView__title">{this.props.formType}</h2>
				<form className="formView__form form">
					<FormItem
						text="Username"
						id="username"
						name="username"
						type="text"
						value={this.state.username}
						handleInputChange={this.handleInputChange}
					/>
					<div>
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
					</div>
					<FormItem
						text="Password"
						id="password"
						name="password"
						type="password"
						value={this.state.password}
						handleInputChange={this.handleInputChange}
					/>
					<Button htmlType="submit" size="large" block>
						<span className="btn__text">{this.props.btnText}</span>
					</Button>
				</form>
			</div>
		);
	}
}
export default Form;
