import React from "react";
import { Button } from "antd";
import AnswersList from "../AnswersList";
import QuestionHeader from "../QuestionHeader";
import styles from "./Question.module.css";

export default class Question extends React.Component {
	checkAnswer = () => {};

	render() {
        return (
            <div className={styles.question}>
				<QuestionHeader />
				<AnswersList />
				<Button block={true} type="primary" className={styles.question__button}>
					Check answer
				</Button>
			</div>
		);
	}
}
