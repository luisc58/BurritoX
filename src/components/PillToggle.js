import React from 'react';
import Styled from 'styled-components';

const StyledPill = Styled.div`
    display: grid; 
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5px;
    border: 1px solid rgba(215,215,215,0.7);
    background: rgba(215,215,215,0.1);
    border-radius: 30px;
    height: 55px;
    margin-bottom: 3rem;
`;

const StyledButton = Styled.button`
        padding: 0 3.5rem;
        cursor: pointer;
        outline: none;
        font-size: 1.1rem;
        font-weight: 600;
        background: ${(props) => (props.isClicked ? 'black' : 'none')};
        color: ${(props) => (props.isClicked ? 'white' : 'black')};
        border-radius: 30px;
        width: 100%''
        height: 100%;
`;

const PillToggle = (props) => {
	return (
		<StyledPill>
			<StyledButton
				isClicked={!props.isSellActive ? true : false}
				type="submit"
				onClick={() => props.setPricing()}
			>
				{props.rightName ? props.rightName : 'Place Ask'}
			</StyledButton>
			<StyledButton
				isClicked={props.isSellActive ? true : false}
				type="submit"
				onClick={() => props.clearPricing()}
			>
				{props.leftName ? props.leftName : 'Sell Now'}
			</StyledButton>
		</StyledPill>
	);
};

export default PillToggle;
