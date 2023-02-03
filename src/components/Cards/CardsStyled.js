import styled from "styled-components";

export const OuterWrapper = styled.div`
    border: 1px solid black;
    width: 150px;
    height: 250px;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
    flex-direction: column;
    align-items: center;
    margin: 10px;

`

export const ImgWrapper = styled.div`
    height: 150px;
    width: 140px;
    border: 2px solid black;
`

export const HealthWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const HealthPoint = styled.div`
    margin-top: 5px;
    border: 2px solid black;
    background-color: red;
    width: 10px;
    height: 10px;
`