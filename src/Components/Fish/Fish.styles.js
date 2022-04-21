import styled from 'styled-components';

const tabletVStartWidth = 768;
const desktopStartWidth = 1024;

const tabletV = `@media (min-width: ${tabletVStartWidth }px)`;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;

export const TarjetFish = styled.div`
    border: 2px solid #00AFC1;
    padding: 30px;
    border-radius: 20%;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    ${tabletV}{
    width: 33%;
    }  
`
export const Name = styled.p`
    font-size: 17px;
    text-transform: uppercase;
    text-align: center;
    font-weight: 800;
    color: #4D96FF; 
`
export const PriceInfo = styled.p`
    font-weight: 800;
    color: #143F6B;
`
export const Div = styled.div`
    display: flex;
    flex-direction: column;
    background-image: url("/pagentera.jpeg");
    ${tabletV}{
        display:flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    ${desktop}{
        justify-content: center;
    } 
}
`
