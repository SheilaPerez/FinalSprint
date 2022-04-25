import styled from 'styled-components';

const tabletVStartWidth = 768;
const desktopStartWidth = 1024;

const tabletV = `@media (min-width: ${tabletVStartWidth }px)`;
const desktop = `@media (min-width: ${desktopStartWidth}px)`;

export const TarjetArt = styled.div`
    border: 2px solid #781D42;
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
    color: #E5890A; 
`
export const FakeInfo = styled.p`
    font-weight: 800;
    color: #A64B2A;
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
export const Yes = styled.p`
    color: #DF5E5E;
    font-weight: 800;
    font-size: 20px;
    border: 2px solid #DF5E5E;
    padding: 4px;
`
export const No = styled.p`
    color: #9FC088;
    font-weight: 800;
    font-size: 20px;
    border: 2px solid #9FC088;
    padding: 4px;
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