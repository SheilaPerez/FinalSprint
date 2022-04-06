import styled from 'styled-components';

const tabletStartWidth = 600;
const tabletVStartWidth = 768;
const desktopStartWidth = 1024;
const bigDesktopStartWidth = 1200;

const tablet = `@media (min-width: ${tabletStartWidth}px)`;
const tabletV = `@media (min-width: ${tabletVStartWidth }px)`;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const bigDesktop = `@media (min-width: ${bigDesktopStartWidth }px)`;


export const Page = styled.div`
    background-image: url("pagentera.jpeg");
    background-size: contain;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Banner = styled.div`
    background-image: url("banner.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    height: 32%;
    width: 100%;
    ${tablet} {
		height: 39%;
        width: 100%;
	}
    ${tabletV} {
		height: 47%;
        width: 93%;
	}
    ${desktop} {
        height: 55%;
        width: 80%;
	}
    ${bigDesktop} {
        height: 63%;
        width: 78%;
	}
`
export const RegisterBtn = styled.button`
    display: inline-block;
    background-color: transparent;  
    border:none;
    color: #BB9981;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 800;
    :hover {
        color: #39AEA9;
    }
`
export const AccountText = styled.p`
    display: inline-block;
    font-size: 12px;

`
export const RegisterDiv = styled.div`
    margin-top: 30px;
`
