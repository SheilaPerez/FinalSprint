import styled from 'styled-components';

const tabletVStartWidth = 768;
const desktopStartWidth = 1024;
const bigDesktopStartWidth = 1200;

const tabletV = `@media (min-width: ${tabletVStartWidth }px)`;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;
const bigDesktop = `@media (min-width: ${bigDesktopStartWidth}px)`;

export const P = styled.p`
    font-size: 16px;
    font-weight: 800;
    color: #E6BA95;
    text-align: center;
    ${desktop}{
        font-size: 21px;
    }
    ${bigDesktop}{
        display: inline-block;
        font-size: 18px;
    }
`
export const Div = styled.div`
    margin: 0px 50px 30px;
    border: 41px double #A2D5AB;
    padding: 8px 30px;
    background-color: white;
`
export const ImgVillagers = styled.img`
    width: 12%;
    margin-left: 38px;
    ${tabletV}{
        margin-left: 90px;
    }
    ${desktop}{
        margin-left: 130px;
    }
    ${bigDesktop}{
        margin-left: 104px;
        margin-top: 50px;
        width: 4%;
    }
`
export const ImgLadino = styled.img`
    width: 8%; 
    margin-left: 4px;
    ${bigDesktop}{
        width: 4%;
    }
`
export const ImgArt = styled.img`
    width: 20%; 
    margin-left: 58px;
    ${tabletV}{
        margin-left: 144px;
    }
    ${desktop}{
        margin-left: 214px;
    }
    ${bigDesktop}{
        width: 11%;
        margin-left: 152px;
    }
`
export const ImgBug = styled.img`
    width: 16%;
    margin-left: 67px;
    ${tabletV}{
        margin-left: 162px;
    }
    ${desktop}{
        margin-left: 291px;
    }
    ${bigDesktop}{
        width: 7%;
    }
`
export const Pfinal = styled.p`
    font-size: 20px;
    text-align: center;
    font-weight: 800;
    color: #39AEA9;
`
export const Bayas = styled.img`
    width: 13%;
    margin-bottom: 7px;
    ${bigDesktop}{
        width: 7%;
    }
`
export const Quest = styled.img`
    width: 9%;
    margin-bottom: 31px;
    ${bigDesktop}{
        width: 4%;
    }
`
export const Background = styled.div`
    background-image: url("/pagentera.jpeg");
    width: 100%;
    height: 100vh;
    padding-top: 50px;
`