import React from "react";
import { connect } from "react-redux";
import { removeAlert } from "../../redux/actions/alert";
import { Drawer, Button, Alert } from "antd";

const alertMargin = { marginBottom: "0.5em" };

class AlertContainer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visible: false
		};
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
					/>
				);
			});
		}
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
					closeable="false"
					onClose={this.closeDrawer.bind(this)}
					visible={this.state.visible}
				>
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
		removeAlert
	}
)(AlertContainer);
