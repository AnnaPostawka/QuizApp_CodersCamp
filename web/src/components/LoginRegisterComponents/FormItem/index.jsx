import React from "react";
import styles from "./FormItem.module.css";

const FormItem = props => {
	const { text, id, name, type, value, handleInputChange } = props;
	return (
		<div className={styles.form__group}>
			<input
				placeholder="&nbsp;"
				className={styles.form__input}
				id={id}
				name={name}
				type={type}
				value={value}
				onChange={handleInputChange}
				required
			/>
			<span className={styles.form__span}></span>
			<label className={styles.form__label} htmlFor={name}>
				{text}
			</label>
		</div>
	);
};
export default FormItem;
