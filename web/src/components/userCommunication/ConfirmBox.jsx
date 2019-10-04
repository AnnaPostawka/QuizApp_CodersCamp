import React from "react";
import { Modal, Button } from "antd";

const { confirm } = Modal;

export default function ConfirmBox(props) {
	const showConfirm = function(event) {
		confirm({
			title: props.title,
			content: props.content,
			onOk: props.handleConfirmation,
			onCancel: props.handleCancellation
		});
	};

	return <Button onClick={showConfirm}>{props.buttonInnerText}</Button>;
}
