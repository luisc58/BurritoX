import Styled from 'styled-components';

const StyledNav = Styled.nav`
    padding: 1rem 5rem 1rem 2rem;
    display:grid;
    align-items: center;
    font-size: 1.5rem;
    grid-template-columns: 1fr auto;
    background: black;
    a { color: white;}
    span { color: ${(props) => props.theme.green};}
`;

const StyledLinks = Styled.div`
    a, button{
        cursor: pointer;
        display: inline-block;
        margin:  0 0.8rem;
        font-size: 1rem;
        background: none;
    }
    `;

const StyledDropdown = Styled.div`
position: relative;
display: inline-block;
transition: 0.8s;
span {
    color: white;
    font-size: 1rem;
}
.dropdown-content {
      display: none;
      position: absolute;
      background-color: #f9f9f9;
      min-width: 200px;
      padding: 10px;
      z-index: 1;
      transition: 0.8s;
      a {
          color: black;
          padding: 5px;
          font-weight: 400;
          font-size: 1rem;
          margin:0;
          display: block;
      }
}

&:hover .dropdown-content {
display: block;
}
`;

const Styledsidebar = Styled.aside`
    background-color: rgba(215,215,215,0.2);
    height: 92vh;
    border-right: 1px solid rgba(189, 189, 192, 0.3);
	transition: width 0.3s;
	overflow-y: scroll;
    h1 { background-color: rgba(189, 189, 192, 0.15); padding: 1.3rem; margin: 0;}
    a {
        display: flex;
        padding: 1rem 1.3rem;
        font-size: 1rem;
        color: black;
    }
`;
export default StyledNav;
export { StyledLinks, StyledDropdown, Styledsidebar };
