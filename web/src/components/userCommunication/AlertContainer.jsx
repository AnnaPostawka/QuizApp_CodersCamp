import React from "react";
import { connect } from "react-redux";
import { removeAlert, removeAllAlerts } from "../../redux/actions/alert";
import { Drawer, Button, Alert } from "antd";

const alertMargin = { marginBottom: "0.5em" };

class AlertContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
		this.deleteAllAlertsButtonRef = React.createRef();
	}

	renderListOfAlerts() {
		if (this.props.alerts) {
			return this.props.alerts.map(alert => {
				return (
					<Alert
						key={alert.id}
						closable
						onClose={() => {
							this.props.removeAlert(alert.id);
						}}
						message={alert.alertContent}
						type="error"
						style={alertMargin}
						showIcon
					/>
				);
			});
		}
	}

	renderRemoveNotificationsButton() {
		const buttonText = "Remove all notifications";

		const button = (
			<Button
				block
				onClick={this.onClickRemoveAllAlerts.bind(this)}
				style={alertMargin}
				size="small"
				disabled
			>
				{buttonText}
			</Button>
		);

		if (this.props.alerts.length > 0)
			return React.cloneElement(button, {
				disabled: false
			});
		else
			return React.cloneElement(button, {
				disabled: true
			});
	}

	onClickRemoveAllAlerts(event) {
		this.props.removeAllAlerts();
	}

	showDrawer(event) {
		this.setState({
			visible: true
		});
	}

	closeDrawer(event) {
		this.setState({
			visible: false
		});
	}

	render() {
		return (
			<div>
				<Button onClick={this.showDrawer.bind(this)}>Open Drawer</Button>
				<Drawer
					placement="right"
					closable={false}
					onClose={this.closeDrawer.bind(this)}
					visible={this.state.visible}
				>
					{this.renderRemoveNotificationsButton()}
					{this.renderListOfAlerts()}
				</Drawer>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		alerts: state.alertReducer
	};
};

export default connect(
	mapStateToProps,
	{
		removeAlert,
		removeAllAlerts
	}
)(AlertContainer);
