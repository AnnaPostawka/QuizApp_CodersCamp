import React from "react";
import { connect } from "react-redux";
import { removeAlert, removeAllAlerts } from "../../redux/actions/alert";
import { Drawer, Button, Alert, Badge } from "antd";

const alertMargin = { marginBottom: "0.5em" };
const fixedPosition = {
	position: "fixed",
	right: "60px",
	bottom: "30px"
};

class AlertContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
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

	renderListOfAlerts() {
		if (this.props.alerts.length > 0) {
			return this.props.alerts.map(alert => {
				return (
					<Alert
						key={alert.id}
						closable
						onClose={() => {
							this.props.removeAlert(alert.id);
						}}
						message={alert.message}
						description={alert.description}
						type={alert.type}
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

	render() {
		return (
			<div>
				<div style={fixedPosition}>
					<Badge count={this.props.alerts.length}>
						<Button
							shape="circle"
							onClick={this.showDrawer.bind(this)}
							icon="notification"
						></Button>
					</Badge>
				</div>
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
