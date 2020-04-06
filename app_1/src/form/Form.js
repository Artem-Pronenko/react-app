import React from 'react';
import './Form.css';


class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			inpName: '',
			validStart: false
		}
	}

	changeInput = event => {
		let {value} = event.target;
		this.setState({
			inpName: value,
			validStart: true
		});
	};

	submitForm = event => {
		if (!this.state.inpName) {
			event.preventDefault();
			this.setState({
				inpName: '',
				validStart: true
			});
		}
	};

	render() {
		let inpName = '';
		!this.state.inpName && this.state.validStart ? inpName = <p>Поле не должно быть пустым</p> : inpName = '';

		return (
			<div className={'my-form'}>
				<h3 className="form-title">Form title</h3>
				<form onSubmit={this.submitForm}>
					<div className="form-group">
						<label htmlFor="formGroup1">Your name</label>
						<input onChange={this.changeInput} type="text" className="form-control" id="formGroup1"
								 placeholder="Name"/>
						{inpName}
					</div>

					<button type="submit" className="btn btn-primary">Submit</button>
				</form>
			</div>
		);
	}
}


export default Form;
















