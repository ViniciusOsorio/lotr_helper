import styled from "styled-components";

export const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: black; */
    height: 100vh;
    width: 100%;
`

export const CardWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 30px;
    justify-content: center;
    width: 100%;
    height: 100%;
`

export const TopWrapper = styled.div`
    margin: 30px 0px;
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

export const TextDiv = styled.input`
    border: 3px black solid;
`