import Styled from 'styled-components';
const StyledSearch = Styled.div`
	input {
		width: 100%;
		padding: 11px;
		border: 3px solid ${(props) => props.theme.green};
		font-weight: 600;
		font-size: 1.3rem;
	}
	.a {
		width: 50%;
  		margin: 0 auto;
	}

	
`;

export const StyledSearchResults = Styled.div`
	background: white;
	height: auto;
	overflow-y: auto;
	max-height: 35rem;
	margin-top: 0px;
	z-index: 100;
	position: relative;
	text-align: start;
	box-shadow: 0 3px 3px -3px gray;
	color: black; 
`;

export default StyledSearch;
export { StyledSearch };
