import Styled from 'styled-components';

const StyledHeader = Styled.header`
	text-align: center;
	background: black;
	color: white;
	height: 35vh;
	padding-top: 3.5rem;
	.sub-menu {
		padding-top: 7rem;
		.styled-link {
			color: ${(props) => props.theme.green};
		}
		button {
			outline: none;
			color: white;
			background: none;
			font-size: 1rem;
			font-weight: 700;
			&:hover {
				/* border-bottom: 5px solid ${(props) => props.theme.green};
				padding-bottom: 7px; */
				cursor: pointer;
			}
			&:not(:first-child) {
				margin-left: 1.5rem;
			}
		}
	} 
`;

export default StyledHeader;
