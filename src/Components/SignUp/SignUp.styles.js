import styled from 'styled-components';

const desktopStartWidth = 1024;
const bigDesktopStartWidth = 1200;

const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const bigDesktop = `@media (min-width: ${bigDesktopStartWidth }px)`;


export const Div = styled.div`
    display: flex;
    justify-content: center;
    background-color: #BB9981;
    height: 100vh;
    padding-top: 64px;
`

export const Page = styled.div`
    background-image: url("signin.jpeg");
    width: 64%;
    height: 549px;
    background-size: cover;
    padding-bottom: 20px;
    display: flex;
    align-items: flex-end;

    ${desktop} {
        width: 69%;
        justify-content: center
	}
    ${bigDesktop} {
        height: 80%;
        width: 878px;
        justify-content: center
	}

`
export const InputDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Input = styled.input`
    background-color: transparent;
    border: 0px solid;
    border-bottom: 2px solid #39AEA9;
    width: 210px;
    padding: 10px;
    margin: 0px 9px;
    font-weight: 800;
    outline: none;
    :hover {
        background-color: white;

    }
`
export const SignBtn = styled.button`
    background-color: #BB9981;
    padding: 8px 80px;
    border: 2px solid white;
    color: white;
    text-transform: uppercase;
    font-size: 13px;
    margin-top: 15px;
    :hover {
        background-color: white;
        color: #39AEA9;
    }
`

export const ChooseText = styled.p`
    text-align: center;
    font-weight: 800;
    margin: 12px; 
`

export const ChooseDiv = styled.div`
    background-color: #39aea98a;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 19px;
    margin: 9px 36px;
    ${bigDesktop}{
        margin: 9px 36px 24px 36px;
    }
`

export const Select = styled.select`
    outline: none;
    padding: 6px;
    background-color: #e7cfac;
    border: none;
`
