import React from "react";
import { connect } from "react-redux";
import { removeAlert, removeAllAlerts } from "../../redux/actions/alert";
import { Drawer, Button, Alert, Badge, Typography } from "antd";

const { Text } = Typography;

const drawerChildrenMarginStyle = { marginBottom: "0.5em" };
const openDrawerButtonFixedStyle = {
	position: "fixed",
	right: "20px",
	bottom: "20px"
};
const justifyContentStyle = {
	display: "flex",
	flexWrap: "nowrap",
	justifyContent: "space-between"
};
const drawerBodyStyle = { padding: "16px" };
const removeNotificationButtonStyle = { marginBottom: "1.5em", width: "180px" };

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
				let alertTime = `${alert.timestamp.getHours()}:${alert.timestamp.getMinutes()}`;
				let alertDate = alert.timestamp.toLocaleDateString();
				return (
					<div>
						<div style={justifyContentStyle}>
							<Text type="secondary">{alertTime}</Text>
							<Text type="secondary">{alertDate}</Text>
						</div>
						<Alert
							key={alert.id}
							closable
							onClose={() => {
								this.props.removeAlert(alert.id);
							}}
							message={alert.message}
							description={alert.description}
							type={alert.type}
							style={drawerChildrenMarginStyle}
							showIcon
						/>
					</div>
				);
			});
		}
	}

	renderRemoveNotificationsButton() {
		const buttonText = "Remove all notifications";

		const button = (
			<Button
				onClick={this.onClickRemoveAllAlerts.bind(this)}
				style={removeNotificationButtonStyle}
				size="small"
				disabled
			>
				{buttonText}
			</Button>
		);

		if (this.props.alerts.length > 0)
			return (
				<div>
					{React.cloneElement(button, {
						disabled: false
					})}
				</div>
			);
		else
			return React.cloneElement(button, {
				disabled: true
			});
	}

	render() {
		return (
			<div>
				<div style={openDrawerButtonFixedStyle}>
					<Badge count={this.props.alerts.length}>
						<Button
							shape="circle"
							onClick={this.showDrawer.bind(this)}
							icon="notification"
							size="large"
						></Button>
					</Badge>
				</div>
				<Drawer
					placement="right"
					closable={true}
					onClose={this.closeDrawer.bind(this)}
					visible={this.state.visible}
					bodyStyle={drawerBodyStyle}
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
