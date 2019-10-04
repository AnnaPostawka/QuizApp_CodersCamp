import React, { Component } from "react";
import { connect } from "react-redux";
import AlertContainer from "../../components/userCommunication/AlertContainer";
import { Button } from "antd";
import { addAlert } from "../../redux/actions/alert";

class LoginView extends Component {
	onButtonClickHandler(e) {
		this.props.alertsAddAlerts("Henlo!");
	}

	render() {
		console.log(this.props);
		return (
			<div>
				<Button onClick={this.onButtonClickHandler.bind(this)}>Add alert</Button>
				<AlertContainer />
			</div>
		);
	}
}

export default connect(
	null,
	{ alertsAddAlerts: addAlert }
)(LoginView);
