import { notification } from "antd";

// alowed types = ["success", "info", "warning", "error"]
const openNotification = props => {
	let placement = "bottomRight";
	let duration = props.duration <= 0 ? 0 : props.duration;
	console.log(duration);

	notification.destroy();

	notification.config({ placement, duration });
	notification[props.type || "error"]({
		message: props.message,
		description: props.description
	});
};

export default openNotification;
