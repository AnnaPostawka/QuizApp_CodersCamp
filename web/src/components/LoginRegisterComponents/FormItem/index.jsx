import React from "react";
import "./FormItem.css";

const FormItem = props => {
	const { text, id, name, type, value, handleInputChange } = props;
	return (
		<div className="form__group">
			<input
				placeholder="&nbsp;"
				className="form__input"
				id={id}
				name={name}
				type={type}
				value={value}
				onChange={handleInputChange}
				required
			/>
			<span className="form__span"></span>
			<label className="form__label" htmlFor={name}>
				{text}
			</label>
		</div>
	);
};
export default FormItem;
