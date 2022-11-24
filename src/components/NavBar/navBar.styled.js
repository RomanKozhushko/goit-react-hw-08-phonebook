import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.div`
width: 90%;
margin: 10px auto;
padding: 10px;
display: flex;
justify-content: center;
background-color: steelblue;
`
export const Button = styled(NavLink)`
margin-right: 25px; 
padding: 10px 30px;
scale: 1.2;
text-decoration: none;
border: 4px solid white;
border-radius: 5px;
color: white;
:hover {
    color: steelblue;
    background-color: white;
    cursor: pointer;
}
`