import styled from "styled-components";

export const AppWrapper = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const TopWrapper = styled.div`
    margin: 20px 0px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const EyeDiv = styled.div`
    border: 2px solid black;
    border-radius: 180px;
    width: 150px;
    height: 150px;
    background-image: url(${props => props.url});
    background-size: 220px;
    background-position: -34px -23px;
    background-repeat: no-repeat;
`