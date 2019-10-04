import { ADD_ALERT_TYPE, REMOVE_ALERT_TYPE } from "../actions/alert";

const alertReducer = (alerts = [], action) => {
	if (action.type === ADD_ALERT_TYPE) {
		return [...alerts, action.payload];
	} else if (action.type === REMOVE_ALERT_TYPE) {
		alerts = alerts.filter(alert => {
			return alert.id !== action.payload;
		});

		return alerts;
	}

	return alerts;
};

export { alertReducer };
