import styled from 'styled-components';

const Form = styled.form`
	padding: 20px;
	line-height: 1.6;
	font-weight: 600;
	overflow-y: auto;
	label {
		display: block;
		margin-bottom: 1.3rem;
	}
	input,
	textarea,
	select {
		width: 100%;
		padding: 0.9rem;
		font-size: 1rem;
		border: 1px solid black 0.2;
		&:focus {
			outline: 0;
			border-color: ${(props) => props.theme.red};
		}
	}
	button,
	input[type='submit'] {
		margin-top: 2rem;
		width: 100%;
		background: ${(props) => props.theme.green};
		color: white;
		border: 0;
		font-size: 1.2rem;
		font-weight: 400;
		padding: 0.8rem 1.2rem;
	}

	fieldset {
		border: 0;
		padding: 0;

		&[disabled] {
			opacity: 0.4;
		}
	}
	p {
		padding-top: 2rem;
		text-align: center;
		font-weight: 500;
		a {
			color: blue;
		}
	}
`;

////////// SELL FORM / ASK FORM ////////

const StyledFormInput = styled.input`
	display: block;
	width: 100%;
	height: 60px;
	font-size: 1.5rem;
	color: black;
	padding: 1rem;
	border-radius: 1px;
	border: 1px solid rgba(215, 215, 215, 0.7);
	outline: 0;
`;

const StyledFormSelect = styled.select`
	display: block;
	width: 100%;
	height: 60px;
	background: none;
	font-size: 1.5rem;
	color: black;
	padding: 1rem;
	border-radius: 1px;
	border: 1px solid rgba(215, 215, 215, 0.7);
	outline: 0;
`;

const StyledFormLabel = styled.label`
	display: block;
	text-align: left;
	margin: 10px 0;
	font-size: 1rem;
	color: black;
`;

const StyledFormButton = styled.button`
	background-color: ${(props) => props.theme.green};
	min-height: 49px;
	width: 100%;
	margin-top: 2rem;
	font-size: 1rem;
	color: white;
	border-radius: 5px;
	outline: 0;
`;

export default Form;
export { StyledFormInput, StyledFormSelect, StyledFormLabel, StyledFormButton };
