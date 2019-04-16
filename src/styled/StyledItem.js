import Styled from 'styled-components';

const StyledItem = Styled.div`
    padding: 1rem;
    span { color: gray;}
    border: 2px solid rgba(215,215,215,0.1);
    height: 100%;

`;

const StyledItemImg = Styled.img`
    width: 100%;
    height: ${(props) => (props.isExpanded ? '600px' : '200px')}
    margin-top: ${(props) => (props.isExpanded ? '4rem' : 0)};
    margin-bottom: 10px;
    object-fit: contain;
    padding: 1rem;
`;

const StyledItemName = Styled.div`
    text-overflow: ellipsis;
    font-size: ${(props) => (props.bigFont ? '2.7rem' : '1.2rem')};
    padding: 10px 0;
    font-weight: ${(props) => (props.bigFont ? '900' : '500')};
    color: black;
`;

const StyledItemButton = Styled.button`    
        font-size: 1.7rem;
        font-weight: 600;
        border-radius: 5px;
        padding: 0.8rem 3rem;
        color: white;
        background: ${(props) => (props.isBlack ? 'black' : props.theme.green)}
        margin-top: 1.5rem;
        margin-left: 1rem;
    
`;
const StyledItemPrice = Styled.div`
    font-weight:600;
    font-size: 1.1rem;
    color: black;
`;

const StyledItemLink = Styled.a`
    text-decoration: none;
    cursor: pointer;
`;

const StyledItemDetails = Styled.div`
	padding: 3rem 5rem;
	max-width: 1250px;
    p { font-size: 1.4rem; }
	.a {
		display: flex;
		list-style: none;
		margin: 0; padding: 0;
		li {
			color: gray;
			font-size: 1rem;
			&:not(:first-child) {
				padding-left: 1rem;
			}
			span {color: black; font-weight: 600;}
		}	
	}
`;

export {
	StyledItem as default,
	StyledItemImg,
	StyledItemName,
	StyledItemPrice,
	StyledItemLink,
	StyledItemDetails,
	StyledItemButton
};
