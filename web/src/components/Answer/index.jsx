import React from "react";
import { Button } from "antd";
import entityToChar from "../../utils/entityToChar";
import { connect } from "react-redux";
import styles from "./Answer.module.css";

class Answer extends React.Component {
    onClick = () => {
        
	};

	render() {
		return (
			<Button block={true} className={styles.question__answer} onClick={this.onClick}>
				{entityToChar(this.props.children)}
			</Button>
		);
	}
}

const mapStateToProps = state => {
	return {
		answer: state.answer
	};
};

export default connect(mapStateToProps)(Answer);
