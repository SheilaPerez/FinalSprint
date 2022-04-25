import styled from 'styled-components';

const tabletVStartWidth = 768;
const desktopStartWidth = 1024;

const tabletV = `@media (min-width: ${tabletVStartWidth }px)`;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;

export const TarjetBug = styled.div`
    border: 2px solid #4E944F;
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
    color: #83BD75; 
`
export const PriceInfo = styled.p`
    font-weight: 800;
    color: #6BCB77;
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
export const Input = styled.input`
    padding: 5px 23px;
    border: 2px solid #39AEA9;
    border-radius: 10px;
    width: 200px;
`
export const Quest = styled.p`
    font-weight: 800;
    margin-right: 20px;
`
export const DivInptQuest = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    ${tabletV}{
        flex-direction: row;
        margin-left: 70px;
    }  
`