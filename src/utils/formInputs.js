import React, { Component } from 'react';
import { StyledFormLabel, StyledFormSelect, StyledFormInput } from '../styled/Form';

const SimpleFormInput = (props) => {
	const { name, label, input, type, bid, meta } = props;
	return (
		<div>
			<StyledFormLabel htmlFor={name}>{label}</StyledFormLabel>
			<StyledFormInput {...input} type={type} value={bid} />
		</div>
	);
};

const SimpleFormSelect = (props) => {
	const { name, label, options, value, selectedOption } = props;

	const handleBlur = () => {
		const { value } = props.input;
		if (!value) return props.input.onBlur(null);
		return value.value ? props.input.onBlur({ value }) : props.input.onBlur(value);
	};

	const handleChange = (value) => {
		if (!value) return props.input.onChange(null);
		return value.value ? props.input.onChange({ value }) : props.input.onChange(value);
	};
	return (
		<div>
			<StyledFormLabel htmlFor={name}>{label}</StyledFormLabel>
			<StyledFormSelect value={value} onChange={handleChange} onBlur={handleBlur}>
				<option value="1" disabled selected>
					Select
				</option>
				{options.map((item) => (
					<option key={item.value} value={item.value} selected={item.value === selectedOption}>
						{item.name}
					</option>
				))}
			</StyledFormSelect>
		</div>
	);
};

class SimpleFormSelectTest extends Component {
	render() {
		const { name, label, options, value, selectedOption, selectOption } = this.props;

		const handleBlur = () => {
			const { value } = this.props.input;
			if (!value) return this.props.input.onBlur(null);
			return value.value ? this.props.input.onBlur({ value }) : this.props.input.onBlur(value);
		};
		const handleChange = (value) => {
			if (!value) return this.props.input.onChange(null);
			selectOption(this.props.input.value);
			return value.value ? this.props.input.onChange({ value }) : this.props.input.onChange(value);
		};

		return (
			<div>
				<StyledFormLabel htmlFor={name}>{label}</StyledFormLabel>
				<StyledFormSelect value={value} onChange={handleChange} onBlur={handleBlur}>
					<option value="1" disabled selected>
						Select
					</option>
					{options.map((item) => (
						<option key={item.value} value={item.value} selected={item.value === selectedOption}>
							{item.name}
						</option>
					))}
				</StyledFormSelect>
			</div>
		);
	}
}

export { SimpleFormInput, SimpleFormSelect, SimpleFormSelectTest };
