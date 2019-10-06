import { notification } from "antd";

// alowed types = ["success", "info", "warning", "error"]
const openNotification = props => {
	let duration = props.duration <= 0 ? 0 : props.duration;

	notification.destroy();

	notification[props.type || "error"]({
		message: props.message,
		description: props.description,
		placement: "topRight",
		duration
	});
};

export default openNotification;
