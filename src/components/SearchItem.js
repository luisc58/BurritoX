import React from 'react';
import Styled from 'styled-components';

const StyledResultItem = Styled.div`
	display: grid;
	justify-items: start;
	grid-template-columns: 20% 80%;
	padding: 1.8rem;
	border-top: 1px solid rgba(215,215,215,0.8);
	color: black;
	img {
		height: 80px;
		width: 100%;
		object-fit: contain;
	}
	h1 {
		font-size: 1.5rem;
	}
`;

const SearchItem = ({ poster, name }) => (
	<StyledResultItem>
		<img src={poster} alt={name} />
		<h1>{name}</h1>
	</StyledResultItem>
);

export default SearchItem;
