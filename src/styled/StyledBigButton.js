import Styled from 'styled-components';

const StyledBigButton = Styled.button`
    background: ${(props) => props.theme.green};
    padding: 11px;
    margin-left: 0.5rem;
    font-size: 1.3rem;
    font-weight: 400;
    border:0;
    border-radius: 3px;
    color: white;
`;

export default StyledBigButton;
