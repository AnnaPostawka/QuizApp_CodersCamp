import React from "react";
import { Button } from "antd";
import entityToChar from "../../utils/entityToChar";
import styles from "./Answer.module.css";

export default class Answer extends React.Component {
	render() {
		return (
            <Button block={true} className={styles.question__answer}>
                {entityToChar(this.props.children)}
			</Button>
		);
	}
}
