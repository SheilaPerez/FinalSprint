import styled from 'styled-components';

export const Logo = styled.div`
    background-image: url("logoNH.png");
    width: 38%;
    height: 100px;
    background-repeat: no-repeat;
    background-size: contain;
`
export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 60px;
    margin: 8px;
    margin-right: 30px;
    display: ${({open}) => open ? "flex" : "none"};
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
`
export const MenuItemLink = styled.a`
    text-transform: uppercase;
    color: #39AEA9;
    font-size: 15px;
    :hover{
        color: #ffffff;
`
