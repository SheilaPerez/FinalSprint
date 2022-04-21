import styled from 'styled-components';

export const Card = styled.div`
    border: 4px solid #DAB88B;
    display: flex;
    flex-direction: column;
    width: 270px;
    align-items: center;
    border-radius: 20%;
    padding: 20px;
    background-color: white;
    margin-top: 41px;
`
export const Div = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background-image: url("/pagentera.jpeg");
    height: 100vh;
`
export const Title = styled.p`
   margin-right: 5px;
   color: #00AFC1;
`
export const DescriptinDiv = styled.div`
    display: flex;
`
export const Name = styled.h2`
    color: #8D8DAA;
    border-bottom: 3px solid #DAB88B;
    width: 100%;
    display: flex;
    justify-content: center;
    padding-bottom: 13px;
`
export const PremiumCard = styled.div`
    border: 4px solid #FFD36E;
    background-color: #F2D974;
    border-radius: 18%;
    padding: 20px;
    width: 164px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const GoldCard = styled.h3`
    color: white;
    margin: 0px;
    padding-bottom: 9px;
    cursor: pointer;
`