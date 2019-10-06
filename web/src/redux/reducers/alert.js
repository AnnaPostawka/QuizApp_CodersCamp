import { ADD_ALERT_TYPE, REMOVE_ALERT_TYPE, REMOVE_ALL_ALERTS_TYPE } from "../actions/alert";
import openNotification from "../../components/userCommunication/Notification";

const alertReducer = (alerts = [], action) => {
	if (action.type === ADD_ALERT_TYPE) {
		action.payload.timestamp = new Date();

		openNotification({
			message: action.payload.message,
			description: action.payload.description,
			type: action.payload.type,
			duration: action.payload.duration
		});

		return [...alerts, action.payload];
	} else if (action.type === REMOVE_ALERT_TYPE) {
		alerts = alerts.filter(alert => {
			return alert.id !== action.payload;
		});

		return alerts;
	} else if (action.type === REMOVE_ALL_ALERTS_TYPE) {
		return [];
	}

	return alerts;
};

export { alertReducer };
