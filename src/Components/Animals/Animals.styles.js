import styled from 'styled-components';

const tabletVStartWidth = 768;
const tabletV = `@media (min-width: ${tabletVStartWidth}px)`;

export const BtnDiv = styled.div`
    border: 5px solid #E4AEC5;
    border-radius: 28%;
    display: flex;
    justify-content: center; 
    padding: 20px;
    margin: 20px; 
    width: 100px;
    background-color: white;
`
export const Div = styled.div`
    background-image: url("/pagentera.jpeg");
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    ${tabletV}{
        flex-direction: row;
        justify-content: center;
    }
`

