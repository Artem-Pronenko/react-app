import React, {useContext, useState} from "react";
import {AlertContext} from "../context/alert/alertContext";

export const Form = () => {

	const [value, setValue] = useState('');
	const alert = useContext(AlertContext);

	const submitHandler = event => {
		event.preventDefault();


		if (value.trim()) {
			alert.show('Заметка создана!', 'success');
			setValue('');
		} else {
			alert.show('Название заметки не может быть пустым!', 'warning');
		}

	};

	return (
		<form action="" onSubmit={submitHandler}>
			<div className="form-group">
				<input
					type="text"
					className="form-control"
					placeholder={'Название заметки'}
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			</div>
		</form>
	)
};