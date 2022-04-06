import styled from 'styled-components';

export const DivLogin = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`
export const Input = styled.input`
    background-color: transparent;
    border: 0px solid;
    border-bottom: 2px solid #39AEA9;
    width: 210px;
    padding: 10px;
    margin-bottom: 10px;
    font-weight: 800;
    outline: none;
    :hover {
        background-color: white;

    }
`
export const SignBtn = styled.button`
    background-color: #39AEA9;
    padding: 15px;
    border: 2px solid white;
    color: white;
    text-transform: uppercase;
    font-size: 15px;
    :hover {
        background-color: white;
        color: #39AEA9;
    }
`