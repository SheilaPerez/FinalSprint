import styled from 'styled-components';
import { MdViewHeadline } from "react-icons/md";

const tabletVStartWidth = 768;

const tabletV = `@media (min-width: ${tabletVStartWidth }px)`;

export const Logo = styled.div`
    background-image: url("/logoNH.png");
    width: 38%;
    height: 100px;
    background-repeat: no-repeat;
    background-size: contain;
`
export const MenuMbl = styled(MdViewHeadline)`
    width: 60px;
    ${tabletV}{
        display: none;
    }
`
export const Menu = styled.ul`
    margin: 8px;
    display: ${({ open }) => open ? "flex" : "none"};
    background-color: #FFF6EA;
    flex-direction: column;
    align-items: flex-end;
    ${tabletV}{
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`
export const MenuItem = styled.li`
    list-style:none;
    padding: 10px;
    cursor: pointer;
    :hover{
        background-color: #e7cfac;
    }
`
export const HeaderMenu = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 30px;
`
export const MenuItemLink = styled.span`
    text-transform: uppercase;
    color: #39AEA9;
    font-size: 15px;
    text-decoration:none;
    :hover{
        color: #ffffff;
`
