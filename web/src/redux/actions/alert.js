export const ADD_ALERT_TYPE = "ADD_ALERT";
export const REMOVE_ALERT_TYPE = "REMOVE_ALERT";
export const REMOVE_ALL_ALERTS_TYPE = "REMOVE_ALL_ALERTS_TYPE";

var incrementalAlertID = 0;

export const addAlert = (
	title = "There was an Error!",
	description = "This error should have been supplied with basic info by a developer, but he chose to not.",
	alertType = "error",
	notificationPopUpDuration = 4.5
) => {
	return {
		type: ADD_ALERT_TYPE,
		payload: {
			id: incrementalAlertID++,
			message: title,
			description: description,
			type: alertType,
			duration: notificationPopUpDuration
		}
	};
};

export const removeAlert = id => {
	return {
		type: REMOVE_ALERT_TYPE,
		payload: id
	};
};

export const removeAllAlerts = () => {
	return {
		type: REMOVE_ALL_ALERTS_TYPE
	};
};
